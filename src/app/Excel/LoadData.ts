
import { read, utils, WorkBook, readFile } from 'xlsx'
import { existsSync } from 'fs';

function LoadExcelFile(fileName:string) {
    if(existsSync(fileName)){
        const wb:WorkBook = readFile(fileName)
        return wb;
    }else{
        throw new Error(`${fileName} 不存在`);   
    }
}
function checkExcelVersion(wb:WorkBook)
{
    if(wb.SheetNames.indexOf('模板版本修订记录') < 0)
    {
        throw new Error('文件格式错误:缺少模板版本修订记录页');
    }
    
    
}