import { expect } from 'chai';
import 'mocha';
import { ExcelData } from '../app/Excel/LoadData';
import { InputParamTypeList, TransExcelDatatoStructObj } from '../app/ParamCheck/TransExcel';
import { ParamSetComm } from '../app/Param/ParamSet';
import { ProjectParam } from '../app/Param/Project';
import { GetExpectData } from '../app/ParamCheck/CheckData';

const testExcel = 'data/test/全项测试集.xlsx';
describe('测试ParamCheckTest', () => {
    let ed: ExcelData;
    before(() => {
        ed = new ExcelData(testExcel);
    });
    describe('TransExcel', () => {
        it('缺少配置列', () => {
            const exceldata = ed.GetJson('输入', ['设备']);
            const outData = {};
            delete exceldata.get('输入-设备参数')[0].配置值;
            expect(() => TransExcelDatatoStructObj(exceldata, outData as ParamSetComm)).throw(Error, '缺少"配置"列');
        });
        it('缺少参数列', () => {
            const exceldata = ed.GetJson('输入', ['设备']);
            const outData = {};
            delete exceldata.get('输入-设备参数')[0].参数;
            expect(() => TransExcelDatatoStructObj(exceldata, outData as ParamSetComm)).throw(Error, '缺少"参数"列');
        });
        it('不可识别参数名', () => {
            const exceldata = ed.GetJson('输入', ['设备']);
            const outData: ParamSetComm = {} as ParamSetComm;
            exceldata.get('输入-设备参数')[0].参数 = 'unknowParam';
            exceldata.get('输入-设备参数')[1].参数 = 'unknowParam2';
            TransExcelDatatoStructObj(exceldata, outData);
            expect(outData).to.have.ownProperty('unKnowParam');
            expect(outData['unKnowParam']).to.an('array').lengthOf(2).include('unknowParam').include('unknowParam2');
        });
        it('重复参数', () => {
            const exceldata = ed.GetJson('输入', ['设备']);
            const outData: ParamSetComm = {} as ParamSetComm;
            exceldata.get('输入-设备参数')[1].参数 = exceldata.get('输入-设备参数')[0].参数;
            expect(() => TransExcelDatatoStructObj(exceldata, outData)).throw(Error, '参数名重复');
        });
        it('数字和字符转换', () => {
            const exceldata = ed.GetJson('输入', ['线路']);
            const outData: ParamSetComm = {} as ParamSetComm;
            TransExcelDatatoStructObj(exceldata, outData);
            const prj = outData.Project.GetData(0) as ProjectParam;
            expect(prj).to.have.ownProperty('Proj_MinVehicleLength');
            expect(prj).to.have.ownProperty('Proj_MinHook2Roller');
            expect(prj).to.have.ownProperty('Proj_IAtpCommMode');
            expect(prj.Proj_MinVehicleLength).to.equal(28);
            expect(prj.Proj_MinHook2Roller).to.equal(4.013);
            expect(prj.Proj_IAtpCommMode).to.eqls('Type_Beacon');
        });
        it('多配置值重复参数', () => {
            const exceldata = ed.GetJson('输入', ['车辆']);
            const outData: ParamSetComm = {} as ParamSetComm;
            exceldata.get('输入-车辆参数')[1].参数 = exceldata.get('输入-车辆参数')[0].参数;
            expect(() => TransExcelDatatoStructObj(exceldata, outData)).throw(Error, '参数名重复');
        });
        it('多配置值数据越界', () => {
            const exceldata = ed.GetJson('输入', ['车辆']);
            const outData: ParamSetComm = {} as ParamSetComm;
            exceldata.get('输入-车辆参数')[1].配置值5 = 6;
            expect(() => TransExcelDatatoStructObj(exceldata, outData)).throw(Error, /存在越界数据/);
        });
        it('多配置值正常', () => {
            const exceldata = ed.GetJson('输入', ['车辆']);
            const outData: ParamSetComm = {} as ParamSetComm;
            TransExcelDatatoStructObj(exceldata, outData);
            expect(outData.Vehicle.paramSerial).to.an('array').lengthOf(3);
            expect(outData.Vehicle.GetData(0)['Veh_Marshal']).to.eqls(3);
            expect(outData.Vehicle.GetData(1)['Veh_Marshal']).to.eqls(4);
            expect(outData.Vehicle.GetData(2)['Veh_Marshal']).to.eqls(5);
            expect(outData.Vehicle.GetData(0)['Veh_Gebr']).to.eqls(0.8);
            expect(outData.Vehicle.GetData(1)['Veh_Gebr']).to.eqls(1);
            expect(outData.Vehicle.GetData(2)['Veh_Gebr']).to.eqls(1.2);
        });
        it('系统通用多配置值正常', () => {
            const exceldata = ed.GetJson('输出', ['系统通用']);
            const outData: ParamSetComm = {} as ParamSetComm;
            TransExcelDatatoStructObj(exceldata, outData);
            expect(outData.SysComm.paramSerial).to.an('array').lengthOf(3);
            expect(outData.SysComm.GetData(0)['CFG_T_CBI_ALIVE_TO_ZC']).to.eqls(3000);
            expect(outData.SysComm.GetData(1)['CFG_T_CBI_ALIVE_TO_ZC']).to.eqls(3000);
            expect(outData.SysComm.GetData(2)['CFG_T_CBI_ALIVE_TO_ZC']).to.eqls(3000);
            expect(outData.SysComm.GetData(0)['CFG_V_ATPOPEN_SPD']).to.eqls(5.09);
            expect(outData.SysComm.GetData(1)['CFG_V_ATPOPEN_SPD']).to.eqls(5.71);
            expect(outData.SysComm.GetData(2)['CFG_V_ATPOPEN_SPD']).to.eqls(6.2);
        });
        it('屏蔽门开门码', () => {
            const exceldata = ed.GetJson('输出', ['屏蔽门开门码']);
            const outData: ParamSetComm = {} as ParamSetComm;
            TransExcelDatatoStructObj(exceldata, outData);
            expect(outData.PSD[0]['屏蔽门编号']).to.be.eqls('0101');
        });
    });
    describe('CheckData', () => {
        it('获取期望值', () => {
            const exceldata = ed.GetJson('输入', InputParamTypeList);
            const outData: ParamSetComm = {} as ParamSetComm;
            TransExcelDatatoStructObj(exceldata, outData);
            const expectdata = GetExpectData(outData);
        });
    });
});
