import { assert, expect } from 'chai';
import 'mocha';
import { ExcelData } from '../app/Excel/LoadData';
import { strictEqual } from 'assert';
import { InputParamTypeList, OutputParamTypeList } from '../app/ParamCheck/ParamCheck';

const testExcel = 'data/test/全项测试集.xlsx';
describe('Excel文件加载测试', () => {

    it('文件不存在测试', () => {
        expect(() => { const ed: ExcelData = new ExcelData('A'); }).throw(Error, 'A 不存在');
    });
    it('模板版本页不存在', () => {
        const ed: ExcelData = new ExcelData('data/test/模板版本页不存在.xlsx');
        expect(() => { ed.CheckExcelVersion(''); }).throw(Error, '文件格式错误:缺少模板版本修订记录页');
    });
    describe('模板版本和格式检查', () => {
        const ed: ExcelData = new ExcelData(testExcel);
        it('模板版本错误', () => {
            expect(() => { ed.CheckExcelVersion(''); }).throw(Error, /版本错误/);
        });
        it('模板版本正确', () => {
            expect(() => { ed.CheckExcelVersion('V2.4'); }).not.throw();
        });
        it('模板格式错误', () => {
            expect(() => { ed.CheckExcelFormat('输入', ['其他1', '其他2']); }).throw(/文件格式错误:缺少参数页-/);
        });
        it('模板格式正确', () => {
            expect(() => { ed.CheckExcelFormat('输入', InputParamTypeList); }).not.throw();
        });
    });
    describe('Excel数据加载', () => {
        const ed: ExcelData = new ExcelData(testExcel);
        it('输入参数读取', () => {
            const inputParam =  ed.GetJson('输入', InputParamTypeList);
            expect(inputParam.size).equals(4) ;
        });
        it('输出参数读取', () => {
            const outputParam =  ed.GetJson('输出', OutputParamTypeList);
            expect(outputParam.size).equals(3);
        });
    });
});
