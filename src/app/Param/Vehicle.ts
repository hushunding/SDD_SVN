import { NormalParamTmpl, NumberParamEntry } from './ParamTmpl';

export interface VehicleParmTmpl<T> extends NormalParamTmpl<T> {
    Veh_Marshal: T;
    Veh_ConstructSpeed: T;
    Veh_Length: T;
    Veh_Hook2Roller: T;
    Veh_Hook2Ante: T;
    Veh_MaxAcc: T;
    Veh_MaxDec: T;
    Veh_NormDec: T;
    Veh_Gebr: T;
    Veh_Fsbr: T;
    Veh_FsbTracCutDelay: T;
    Veh_EbTracCutDelay: T;
    Veh_FsbSetDelay: T;
    Veh_GebSetDelay: T;
    Veh_EbCoastTime: T;
    Veh_FsbCoastTime: T;
    Veh_WheelSurfaceErr: T;
    Veh_MaxWheelDiameter: T;
    Veh_MinWheelDiameter: T;
    Veh_DoorWidth: T;
    Veh_CollisionSpd: T;
}


export type VehicleParamSchemtic = VehicleParmTmpl<NumberParamEntry>;

export const VehicleSchemtic: VehicleParamSchemtic = {
    Veh_Marshal: {
        Desc: '列车编组方式', Uint: '辆', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 3, max: 8, step: 1 },
        Default: 3
    },
    Veh_ConstructSpeed: {
        Desc: '列车构造速度', Uint: 'km/h', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 70, max: 160, step: 5 },
        Default: 90,
    },
    Veh_Length: {
        Desc: '列车长度（一端车钩到另一端车钩）', Uint: 'm', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 30, max: 180, step: 0.001 },
        Default: 60,
    },
    Veh_Hook2Roller: {
        Desc: '列车车钩到第一轮对距离（可被区段占用检测设备识别）', Uint: 'm', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 3, max: 5, step: 0.001 },
        Default: 4.013,
    },
    Veh_Hook2Ante: {
        Desc: '列车车钩到天线中心距离', Uint: 'm', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 100, step: 0.001 },
        Default: 7.04,
    },
    Veh_MaxAcc: {
        Desc: '列车最大牵引加速度（不含空转、不含坡度）', Uint: 'm/s/s', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.01 },
        Default: 0.88,
    },
    Veh_MaxDec: {
        Desc: '列车最大制动减速度（不含打滑、不含坡度）', Uint: 'm/s/s', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.01 },
        Default: 1,
    },
    Veh_NormDec: {  // todo 移到线路参数
        Desc: '列车常用制动率', Uint: 'm/s/s', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.01 },
        Default: 0.6,
    },
    Veh_Gebr: {
        Desc: '可保证的EB制动率GEBR（考虑线路最差环境条件）', Uint: 'm/s/s', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.01 },
        Default: 0.8,
    },
    Veh_Fsbr: {
        Desc: '列车全常用制动率', Uint: 'm/s/s', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.01 },
        Default: 1,
    },
    Veh_FsbTracCutDelay: {
        Desc: 'FSB命令下的牵引切除时间（牵引系统收到车载FSB指令到牵引切除所需要的时间）', Uint: 'ms', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 2000, step: 10 },
        Default: 1600,
    },
    Veh_EbTracCutDelay: {
        Desc: 'EB命令下的牵引切除延迟时间（牵引系统收到车载EB指令到牵引切除所需要的时间）', Uint: 'ms', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 2000, step: 10 },
        Default: 1600,
    },
    Veh_FsbSetDelay: {
        Desc: 'FSB建立时间（制动系统从10%至90%建立所需要的时间）', Uint: 'ms', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 2000, step: 10 },
        Default: 1500,
    },
    Veh_GebSetDelay: {
        Desc: '可保证EB制动率建立时间（制动系统从10%制动力至90%制动力建立所需要的时间。若牵引完全切除时10%制动力已建立，则该值为牵引完全切除到90%制动力建立时间）', Uint: 'ms', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 2000, step: 10 },
        Default: 1000,
    },
    Veh_EbCoastTime: {
        Desc: 'EB惰行时间（牵引切除至10%制动力的建立。若牵引完全切除时10%制动力已建立，则该值为零）', Uint: 'ms', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 2000, step: 10 },
        Default: 400,
    },
    Veh_FsbCoastTime: {
        Desc: 'FSB惰行时间（牵引切除至10%制动力的建立）', Uint: 'ms', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 2000, step: 10 },
        Default: 400,
    },
    Veh_WheelSurfaceErr: {
        Desc: '车轮踏面外形尺寸误差', Uint: '‰', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 10, step: 1 },
        Default: 5,
    },
    Veh_MaxWheelDiameter: {
        Desc: '车轮最大轮径', Uint: 'm', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.001 },
        Default: 1.006,
    },
    Veh_MinWheelDiameter: {
        Desc: '车轮最小轮径', Uint: 'm', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.001 },
        Default: 0.986,
    },
    Veh_DoorWidth: {
        Desc: '车门宽度', Uint: 'm', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 2, step: 0.001 },
        Default: 1.3,
    },
    Veh_CollisionSpd: {
        Desc: '车钩可接受的最大撞击速度', Uint: 'km/h', Provider: '车辆供应商',
        Comment: '', Scole: { type: 'number', min: 0, max: 25, step: 1 },
        Default: 3
    },

};

export class VehicleParam implements VehicleParmTmpl<number> {
    [key: string]: number;
    Veh_Marshal = VehicleSchemtic.Veh_Marshal.Default;
    Veh_ConstructSpeed = VehicleSchemtic.Veh_ConstructSpeed.Default;
    Veh_Length = VehicleSchemtic.Veh_Length.Default;
    Veh_Hook2Roller = VehicleSchemtic.Veh_Hook2Roller.Default;
    Veh_Hook2Ante = VehicleSchemtic.Veh_Hook2Ante.Default;
    Veh_MaxAcc = VehicleSchemtic.Veh_MaxAcc.Default;
    Veh_MaxDec = VehicleSchemtic.Veh_MaxDec.Default;
    Veh_NormDec = VehicleSchemtic.Veh_NormDec.Default;
    Veh_Gebr = VehicleSchemtic.Veh_Gebr.Default;
    Veh_Fsbr = VehicleSchemtic.Veh_Fsbr.Default;
    Veh_FsbTracCutDelay = VehicleSchemtic.Veh_FsbTracCutDelay.Default;
    Veh_EbTracCutDelay = VehicleSchemtic.Veh_EbTracCutDelay.Default;
    Veh_FsbSetDelay = VehicleSchemtic.Veh_FsbSetDelay.Default;
    Veh_GebSetDelay = VehicleSchemtic.Veh_GebSetDelay.Default;
    Veh_EbCoastTime = VehicleSchemtic.Veh_EbCoastTime.Default;
    Veh_FsbCoastTime = VehicleSchemtic.Veh_FsbCoastTime.Default;
    Veh_WheelSurfaceErr = VehicleSchemtic.Veh_WheelSurfaceErr.Default;
    Veh_MaxWheelDiameter = VehicleSchemtic.Veh_MaxWheelDiameter.Default;
    Veh_MinWheelDiameter = VehicleSchemtic.Veh_MinWheelDiameter.Default;
    Veh_DoorWidth = VehicleSchemtic.Veh_DoorWidth.Default;
    Veh_CollisionSpd = VehicleSchemtic.Veh_CollisionSpd.Default;
}

