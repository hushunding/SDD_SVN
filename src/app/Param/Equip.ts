import { NormalParamTmpl, NumberParamEntry } from './ParamTmpl';

export interface EquipParmTmpl<T> extends NormalParamTmpl<T> {
    Equ_RadarPulseDist: T;
    Equ_RadarTrigSpd: T;
    Equ_RadarSpdDiff: T;
    Equ_RadarCycle: T;
    Equ_CyclePulseCount: T;
    Equ_BeaconReadDiff: T;
    Equ_AxleClearDelay: T;
    Equ_AxleOccupyDelay: T;
    Equ_PsdProcessDelay: T;
    Equ_PsdWidth: T;
    Equ_BeaconWriteDelay: T;
    Equ_CollisionSpd: T;
    Equ_LoopComDelay: T;
    Equ_PsdRelayEnergDelay: T;
    Equ_PsdClsRelayRlsDelay: T;
}

export type EquipParamSchemtic = EquipParmTmpl<NumberParamEntry>;

export const EquipSchmtic: EquipParamSchemtic = {
    Equ_RadarPulseDist: {
        Desc: '多普勒雷达脉冲代表距离', Uint: 'm', Provider: '雷达供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 25, step: 0.001 },
        Default: 0
    },
    Equ_RadarTrigSpd: {
        Desc: '多普勒雷达激活速度', Uint: 'km/h', Provider: '雷达供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 25, step: 1 },
        Default: 0
    },
    Equ_RadarSpdDiff: {
        Desc: '多普勒雷达的测速误差', Uint: 'm/s', Provider: '雷达供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 5, step: 0.01 },
        Default: 0
    },
    Equ_RadarCycle: {
        Desc: '多普勒雷达报文发送周期', Uint: 'ms', Provider: '雷达供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 1000, step: 50 },
        Default: 0
    },
    Equ_CyclePulseCount: {
        Desc: '速度计单圈脉冲点个数', Uint: '个', Provider: '速度计供货方',
        Comment: '', Scole: { type: 'number', min: 200, max: 200, step: 1 },
        Default: 200
    },
    Equ_BeaconReadDiff: {
        Desc: '信标读取旁瓣误差', Uint: 'm', Provider: '信标供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 0.5, step: 0.01 },
        Default: 0.5
    },
    Equ_AxleClearDelay: {
        Desc: '计轴占用->出清反应时间（需含继电器动作时间）', Uint: 'ms', Provider: '计轴供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 2000, step: 10 },
        Default: 1000
    },
    Equ_AxleOccupyDelay: {
        Desc: '计轴出清->占用反应时间（需含继电器动作时间）', Uint: 'ms', Provider: '计轴供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 500, step: 10 },
        Default: 100
    },
    Equ_PsdProcessDelay: {
        Desc: 'PSC处理时间（PSC收到开门指令到指令处理完成以及状态返回的时间）', Uint: 'ms', Provider: 'PSD供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 1000, step: 10 },
        Default: 200
    },
    Equ_PsdWidth: {
        Desc: '屏蔽门宽度', Uint: 'm', Provider: 'PSD供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 1.5, step: 0.001 },
        Default: 1.6
    },
    Equ_BeaconWriteDelay: { // todo 依然需要拆分
        Desc: '联锁信息写入应答器/信标时间', Uint: 'ms', Provider: '信标供货方',
        Comment: '', Scole: { type: 'number', min: 0, max: 5000, step: 1 },
        Default: 510
    },
    Equ_CollisionSpd: {
        Desc: '车钩可接受的最大撞击速度', Uint: 'km/h', Provider: '运营方',
        Comment: '', Scole: { type: 'number', min: 0, max: 25, step: 1 },
        Default: 3
    },
    Equ_LoopComDelay: { // 应该转移到系统基本参数
        Desc: 'CBI通过通信环线与CC通信延迟时间（若无参考输入，以CFG_T_CBI_ALIVE_TO_CC为准）', Uint: 'ms', Provider: '环线供应方',
        Comment: '', Scole: { type: 'number', min: 0, max: 6000, step: 100 },
        Default: 5000
    },
    Equ_PsdRelayEnergDelay: {
        Desc: '屏蔽门控制继电器吸起时间', Uint: 'ms', Provider: '继电器技术规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 1000, step: 1 },
        Default: 400
    },
    Equ_PsdClsRelayRlsDelay: {
        Desc: '屏蔽门全关闭状态继电器落下时间', Uint: 'ms', Provider: '继电器技术规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 100, step: 1 },
        Default: 70
    },
};

export class EquipParam implements EquipParmTmpl<number> {
    [key: string]: number;
    Equ_RadarPulseDist = EquipSchmtic.Equ_RadarPulseDist.Default;
    Equ_RadarTrigSpd = EquipSchmtic.Equ_RadarTrigSpd.Default;
    Equ_RadarSpdDiff = EquipSchmtic.Equ_RadarSpdDiff.Default;
    Equ_RadarCycle = EquipSchmtic.Equ_RadarCycle.Default;
    Equ_CyclePulseCount = EquipSchmtic.Equ_CyclePulseCount.Default;
    Equ_BeaconReadDiff = EquipSchmtic.Equ_BeaconReadDiff.Default;
    Equ_AxleClearDelay = EquipSchmtic.Equ_AxleClearDelay.Default;
    Equ_AxleOccupyDelay = EquipSchmtic.Equ_AxleOccupyDelay.Default;
    Equ_PsdProcessDelay = EquipSchmtic.Equ_PsdProcessDelay.Default;
    Equ_PsdWidth = EquipSchmtic.Equ_PsdWidth.Default;
    Equ_BeaconWriteDelay = EquipSchmtic.Equ_BeaconWriteDelay.Default;
    Equ_CollisionSpd = EquipSchmtic.Equ_CollisionSpd.Default;
    Equ_LoopComDelay = EquipSchmtic.Equ_LoopComDelay.Default;
    Equ_PsdRelayEnergDelay = EquipSchmtic.Equ_PsdRelayEnergDelay.Default;
    Equ_PsdClsRelayRlsDelay = EquipSchmtic.Equ_PsdClsRelayRlsDelay.Default;
}
