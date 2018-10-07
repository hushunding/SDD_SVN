
import { utils, WorkBook, readFile } from 'xlsx';
import { existsSync } from 'fs';
import { assert } from 'chai';

export class ExcelData {
    wb: WorkBook;
    constructor(fileName: string) {
        assert.ok(existsSync(fileName), `${fileName} 不存在`);
        this.wb = readFile(fileName);

    }
    CheckExcelVersion(expectVersion: string) {
        assert.oneOf<string>('模板版本修订记录', this.wb.SheetNames, '文件格式错误:缺少模板版本修订记录页');
        const versionSheet = this.wb.Sheets['模板版本修订记录'];
        const versiondatas = utils.sheet_to_json(versionSheet, { header: 1 });
        const version = (versiondatas.pop()[0] as string).trim();
        assert.strictEqual(version, expectVersion, '版本错误');
        return '版本检查通过';
    }
    CheckExcelFormat(prefix: '输入' | '输出', paramTypeList: string[]) {
        const MissingParamSheet =
            paramTypeList.filter((paramType) =>
                this.wb.SheetNames.findIndex((shName) =>
                    RegExp(`${prefix}-${paramType}`).test(shName)) < 0);
        assert.isEmpty(MissingParamSheet, `文件格式错误:缺少参数页-"${MissingParamSheet}"`);
    }
    /**
     * @description 将Excel表格转为Json对象Map，Sheet的首行作为Json的key
     * @param prefix 数据类别
     * @param paramTypeList 数据子页
     * @returns  Json对象Map
     */
    GetJson(prefix: '输入' | '输出', paramTypeList: string[]) {
        const selSheet =
            this.wb.SheetNames.filter((shName) =>
                paramTypeList.some((paramType) =>
                    RegExp(`${prefix}-${paramType}`).test(shName)));
        const selObj = new Map<string, any>();
        for (const sh of selSheet) {
            selObj.set(sh, utils.sheet_to_json(this.wb.Sheets[sh]));
        }
        return selObj;
    }
}
