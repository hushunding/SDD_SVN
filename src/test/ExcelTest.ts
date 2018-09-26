import { assert, expect } from 'chai';
import 'mocha';
import { ExcelData } from '../app/Excel/LoadData';
import { strictEqual } from 'assert';


describe('Excel文件加载测试', () => {

    it("文件不存在测试", () => {
        expect(() => { new ExcelData("A") }).to.throw(Error, "A 不存在");
    });
    it("模板版本页不存在", () => {
        const ed:ExcelData = new ExcelData("data/test/模板版本页不存在.xlsx")
        expect(() => { ed.checkExcelVersion() }).to.throw(Error, "文件格式错误:缺少模板版本修订记录页");
    });


});