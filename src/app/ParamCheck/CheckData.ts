import { ParamSetComm, ParamSet } from '../Param/ParamSet';
import { ParamDataSet } from '../Param/ParamTmpl';

export function GetExpectData(excelObj: ParamSetComm) {
    const expectData = new ParamSet('');
    for (const key in expectData) {
        if (expectData.hasOwnProperty(key) && excelObj.hasOwnProperty(key)) {
            const param = expectData[key].GetData(0);
            const indata = excelObj[key].GetData(0);
            for (const paramkey in param) {
                if (param.hasOwnProperty(paramkey)) {
                    param[paramkey] = indata[paramkey];
                }
            }
        }
    }
    const expectVehicle = expectData.Vehicle;
    const inVehicle = excelObj.Vehicle;
    while (expectVehicle.paramSerial.length < inVehicle.paramSerial.length) {
        expectData.AddTrainConfCount(`VT${expectVehicle.paramSerial.length}`);
        const paramNo = expectVehicle.paramSerial.length - 1;
        const param = expectVehicle.GetData(paramNo);
        const indata = inVehicle.GetData(paramNo);
        for (const paramkey in param) {
            if (param.hasOwnProperty(paramkey)) {
                param[paramkey] = indata[paramkey];
            }
        }
    }

}
