import { ParamSetComm, GetDefaultParamDataSet, NewParamDataSet } from '../Param/ParamSet';
import { assert } from 'chai';
import { ParamDataSet } from '../Param/ParamTmpl';

export const InputParamTypeList = ['车辆', '设备', '线路', '系统基本'];
export const OutputParamTypeList = ['系统通用', '系统进路', '屏蔽门开门码'];

const prefixmap = new Map<string, string>([['Veh', 'Vehicle'], ['Equ', 'Equip'], ['Proj', 'Project'], ['Conf', 'Config'], ['CFG', 'SysComm']]);
/**
 * @description 将制定Sheet页数据转为对象
 * @param sheetdata
 * @param outData
 */
function TransNormalSheetDataToObj(sheetdata: any[], outData: ParamSetComm) {
    let startLine = 0;
    for (const dataline of sheetdata) {
        assert.hasAnyKeys(dataline, ['配置值', '配置值1'], '缺少"配置"列');
        assert.containsAllKeys(dataline, ['参数'], '缺少"参数"列');
        const ParamName = dataline.参数 as string;
        const Paramset = GetParamSet(ParamName, outData);
        if (Paramset !== null) {
            AddDatalineToParams(Paramset, dataline, startLine);
        }
        startLine++;
    }
}
/**
 * @description 将数据行添加到参数对象中
 * @param Paramset
 * @param dataline
 * @param lineNo
 */
function AddDatalineToParams(Paramset: ParamDataSet<{}>, dataline: any, lineNo: number) {
    const ParamName = dataline.参数 as string;
    if (dataline.hasOwnProperty('配置值')) {
        const params = Paramset.GetData(0);
        assert.doesNotHaveAnyKeys(params, [ParamName], `参数名重复：${ParamName} 重复`);
        params[ParamName] = ParseConfValue(dataline['配置值']);
    } else {
        let configArraySize = 0;
        configArraySize = getConfSize(configArraySize);
        // 根据第一行创建
        if (lineNo === 0) {
            while (configArraySize > 1) {
                Paramset.paramSerial.push({ Name: '', Data: {} });
                configArraySize--;
            }
        } else {
            assert.isAtMost(configArraySize, Paramset.paramSerial.length, `${ParamName} 存在越界数据`);
        }
        for (let i = 0; i < Paramset.paramSerial.length; i++) {
            const params = Paramset.GetData(i);
            assert.doesNotHaveAnyKeys(params, [ParamName], `参数名重复：${ParamName} 重复`);
            params[ParamName] = ParseConfValue(dataline[`配置值${i}`]);
        }
    }

    function getConfSize(configArraySize: number) {
        for (let i = 1; i <= 5; i++) {
            const confKey = `配置值${i}`;
            if (dataline[confKey] !== 'N/A') {
                configArraySize = i;
            }
        }
        return configArraySize;
    }
}
/**
 * @description 解析配置值，仅对数字进行解析，其他的保留原始值
 * @param ConfValue
 * @returns
 */
function ParseConfValue(ConfValue: string) {
    let res: string | number = ConfValue;
    const f = parseFloat(ConfValue);
    if (!isNaN(f)) {
        res = f;
    }
    return res;
}

/**
 * @description 获取参数集合，如果参数名合法，前缀已知则选择对应的参数集。若参数集不存在，则先创建.若参数名不合法则记录并继续
 * @param ParamName
 * @param outData
 * @returns  Paramset
 */
function GetParamSet(ParamName: string, outData: ParamSetComm) {
    let Paramset: ParamDataSet<{}> | null;
    const m = /^(\w+?)_/.exec(ParamName);
    if (m !== null && prefixmap.has(m[1])) {
        const prefix = m[1];
        const paramType = prefixmap.get(prefix);
        if (!outData.hasOwnProperty(paramType)) {
            Paramset = NewParamDataSet({}, {});
            outData[paramType] = Paramset;
        } else {
            Paramset = outData[paramType];
        }
    } else {
        const unKnowParam = 'unKnowParam';
        let unKnowParamList: Array<string>;
        if (!outData.hasOwnProperty(unKnowParam)) {
            unKnowParamList = [];
            outData[unKnowParam] = unKnowParamList;
        } else {
            unKnowParamList = outData[unKnowParam];
        }
        unKnowParamList.push(ParamName);
        Paramset = null;
    }
    return Paramset;
}

/**
 * @description 将Excel数据转为结构化的对象
 * @param exceldata
 * @param outData
 */
export function TransExcelDatatoStructObj(exceldata: Map<string, any>, outData: ParamSetComm) {
    for (const [k, v] of exceldata) {
        if (k.includes('系统通用')) {
            v[0].参数 = 'CFG_ConfNum';
            TransNormalSheetDataToObj(v, outData);
            outData.SysComm.paramSerial.forEach((paramset) => delete paramset.Data.CFG_ConfNum);
        } else if (k.includes('系统进路')) {
            // todo
        } else if (k.includes('屏蔽门开门码')) {
            outData.PSD = v;
        } else {
            TransNormalSheetDataToObj(v, outData);
        }
    }
}



