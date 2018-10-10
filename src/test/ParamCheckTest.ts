import { expect } from 'chai';
import 'mocha';
import { ExcelData } from '../app/Excel/LoadData';
import { InputParamTypeList, TransExcelDatatoStructObj } from '../app/ParamCheck/ParamCheck';
import { ParamSetComm } from '../app/Param/ParamSet';

const testExcel = 'data/test/全项测试集.xlsx';
describe('测试ParamCheckTest', () => {
    let ed: ExcelData;
    before(() => {
        ed = new ExcelData(testExcel);
    });
    describe('TransNormalSheetDataToObj', () => {
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
            TransExcelDatatoStructObj(exceldata, outData);
            expect(outData).to.be.have.ownProperty('unKnowParam');
            expect(outData['unKnowParam']).to.an('array').lengthOf(1).include('unknowParam');
        });
    });
});
