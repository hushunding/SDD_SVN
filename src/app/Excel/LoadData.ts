
import { read, utils, WorkBook, readFile } from 'xlsx'
import { existsSync } from 'fs';

export class ExcelData {
    wb: WorkBook
    constructor(fileName: string) {
        if (existsSync(fileName)) {
            this.wb = readFile(fileName)
        } else {
            throw new Error(`${fileName} 不存在`);
        }
    }
    checkExcelVersion() {
        if (this.wb.SheetNames.indexOf('模板版本修订记录') < 0) {
            throw new Error('文件格式错误:缺少模板版本修订记录页');
        }
    }
}