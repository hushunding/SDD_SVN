import { NormalParamTmpl, NumberParamEntry, TextParamEntry } from './ParamTmpl';

export interface ProjectParmTmpl<T1, T2> extends NormalParamTmpl<T1, T2> {
    Proj_MinVehicleLength: T1;
    Proj_MinHook2Roller: T1;
    Proj_PlatSpdLimit: T1;
    Proj_MaxLineGrad: T1;
    Proj_MaxPlatGrad: T1;
    Proj_Sp2AxleDist: T1;
    Proj_LineSpdLimit: T1;
    Proj_BeaconFixDiff: T1;
    Proj_Sig2AxleDist: T1;
    Proj_MinSp2SigJumpDist: T1;
    Proj_MinSp2EndJumpDist: T1;
    Proj_MaxDistBcn2SpJump: T1;
    Proj_MinSp2EndOpenDist: T1;
    Proj_MinSp2HookOpenDist: T1;
    Proj_MaxDistBcn2SpOpen: T1;
    Proj_MinDriverSpd: T1;
    Proj_RmMaxForwSpd: T1;
    Proj_RmMaxBackwSpd: T1;
    Proj_EumMaxSpd: T1;
    Proj_MaxRollBackDist: T1;
    Proj_HandOverCBIDelay: T1;
    Proj_HandOverZCDelay: T1;
    Proj_Zc2CbiDelay: T1;
    Proj_Cbi2ZcDelay: T1;
    Proj_Zc2CcDelay: T1;
    Proj_Cc2ZcDelay: T1;
    Proj_Cbi2CcDelay: T1;
    Proj_Cc2CbiDelay: T1;
    Proj_IAtpCommMode: T2;
    Proj_ReverseTractCmd: T2;

}

export type ProjectParamSchemtic = ProjectParmTmpl<NumberParamEntry, TextParamEntry>;
export const ProjectSchmetic: ProjectParamSchemtic = {
    // todo 待更新Scole
    Proj_MinVehicleLength: {
        Desc: '最小线上列车长度，不论是装备了信号系统设备的列车还是未装备信号系统设备的列车（最坏情况下的长度）。该长度的测量应从一列车一边的最突出端到另一边的最突出端。', Uint: 'm', Provider: '运营方',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 28
    },
    Proj_MinHook2Roller: {
        Desc: '线上最短列车车钩到第一轮对距离（可被区段占用检测设备识别）', Uint: 'm', Provider: '运营方',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 4.013
    },
    Proj_PlatSpdLimit: {
        Desc: '站台永久限速', Uint: 'km/h', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 65
    },
    Proj_MaxLineGrad: {
        Desc: '线路最差下坡坡度（按绝对值取值）', Uint: '‰', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 60
    },
    Proj_MaxPlatGrad: {
        Desc: '站台最差下坡坡度（按绝对值取值）', Uint: '‰', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 2
    },
    Proj_Sp2AxleDist: {
        Desc: '停车点距离站台区段计轴最大距离', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 4
    },
    Proj_LineSpdLimit: {
        Desc: '线路最高限速', Uint: 'km/h', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 80
    },
    Proj_BeaconFixDiff: {
        Desc: '信标安装误差(轮径校准、精确停车)', Uint: 'm', Provider: '工程安装',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0.05
    },
    Proj_Sig2AxleDist: {
        Desc: '信号机到关联计轴最大距离', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0.3
    },
    Proj_MinSp2SigJumpDist: {
        Desc: '车辆段跳跃区域的停车位置车钩与信号机最小间距', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 10
    },
    Proj_MinSp2EndJumpDist: {
        Desc: '车辆段跳跃区域的停车位置车钩与车挡最小间距', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 8
    },
    Proj_MaxDistBcn2SpJump: {
        Desc: '车辆段跳跃区域的停车位置与最近精确停车信标最大间距', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 12
    },
    Proj_MinSp2EndOpenDist: {
        Desc: '开口防护停车点到前方车挡距离', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 15
    },
    Proj_MinSp2HookOpenDist: {
        Desc: '开口防护停车点到前方车钩距离（列检库存在两个停车位的情况下，入口处停车位到尽头停车位停稳列车车钩的距离）', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 15
    },
    Proj_MaxDistBcn2SpOpen: {
        Desc: '开口防护停车点与最近精确停车信标的最大间距', Uint: 'm', Provider: '线路数据',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 12
    },
    Proj_MinDriverSpd: {
        Desc: '运营方对点式/CBTC模式下司机控车的最小运行速度要求，若无要求，则填0', Uint: 'km/h', Provider: '运营方',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 45
    },
    Proj_RmMaxForwSpd: {
        Desc: 'RM模式下前进EB触发速度（达到该速度即触发EB）', Uint: 'km/h', Provider: '招投标文件',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 25
    },
    Proj_RmMaxBackwSpd: {
        Desc: 'RM模式下退行EB触发速度（达到该速度即触发EB）', Uint: 'km/h', Provider: '招投标文件',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 5
    },
    Proj_EumMaxSpd: {
        Desc: 'EUM模式下最高限速', Uint: 'km/h', Provider: '招投标文件',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 30
    },
    Proj_MaxRollBackDist: {
        Desc: '车载允许退行的最大距离', Uint: 'm', Provider: '招投标文件',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 5
    },
    Proj_HandOverCBIDelay: {
        Desc: 'CBI交接区通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },
    Proj_HandOverZCDelay: {
        Desc: 'ZC交接区通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },
    Proj_Zc2CbiDelay: {
        Desc: 'ZC->CBI通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },
    Proj_Cbi2ZcDelay: {
        Desc: 'CBI->ZC通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },
    Proj_Zc2CcDelay: {
        Desc: 'ZC->CC通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },
    Proj_Cc2ZcDelay: {
        Desc: 'CC->ZC通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },
    Proj_Cbi2CcDelay: {
        Desc: 'CBI->CC通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },
    Proj_Cc2CbiDelay: {
        Desc: 'CC->CBI通信延迟（互联互通项目），无相关要求则填0', Uint: 'ms', Provider: '互联互通厂家确认',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 0.001 },
        Default: 0
    },

    Proj_IAtpCommMode: {
        Desc: '项目点式车地通信方式：'
            + '\nType_Beacon-基于信标；'
            + '\nType_Loop-基于环线；'
            + '\nType_Both-项目中既有信标又有环线', Uint: '无', Provider: '平面图',
        Comment: '', Scole: { type: 'text', valueset: new Set<string>(['Type_Beacon', 'Type_Loop', 'Type_Both']) },
        Default: 'Type_Beacon'
    },
    Proj_ReverseTractCmd: {
        Desc: '项目是否考虑反向牵引输出：'
            + '\n1.对于CBTC项目，若激活端车载信号仅输出向前指令，选false；若激活端车载信号可输出向后指令，选true；'
            + '\n2.对于无人驾驶项目，若系统配备跳跃功能，应选true；无跳跃功能时，参考CBTC项目。', Uint: '无', Provider: '项目系统设计',
        Comment: '', Scole: { type: 'text', valueset: new Set<string>(['false', 'true']) },
        Default: 'true'
    },
};

export class ProjectParam implements ProjectParmTmpl<number, string> {
    [key: string]: string | number;
    Proj_MinVehicleLength = ProjectSchmetic.Proj_MinVehicleLength.Default;
    Proj_MinHook2Roller = ProjectSchmetic.Proj_MinHook2Roller.Default;
    Proj_PlatSpdLimit = ProjectSchmetic.Proj_PlatSpdLimit.Default;
    Proj_MaxLineGrad = ProjectSchmetic.Proj_MaxLineGrad.Default;
    Proj_MaxPlatGrad = ProjectSchmetic.Proj_MaxPlatGrad.Default;
    Proj_Sp2AxleDist = ProjectSchmetic.Proj_Sp2AxleDist.Default;
    Proj_LineSpdLimit = ProjectSchmetic.Proj_LineSpdLimit.Default;
    Proj_BeaconFixDiff = ProjectSchmetic.Proj_BeaconFixDiff.Default;
    Proj_Sig2AxleDist = ProjectSchmetic.Proj_Sig2AxleDist.Default;
    Proj_MinSp2SigJumpDist = ProjectSchmetic.Proj_MinSp2SigJumpDist.Default;
    Proj_MinSp2EndJumpDist = ProjectSchmetic.Proj_MinSp2EndJumpDist.Default;
    Proj_MaxDistBcn2SpJump = ProjectSchmetic.Proj_MaxDistBcn2SpJump.Default;
    Proj_MinSp2EndOpenDist = ProjectSchmetic.Proj_MinSp2EndOpenDist.Default;
    Proj_MinSp2HookOpenDist = ProjectSchmetic.Proj_MinSp2HookOpenDist.Default;
    Proj_MaxDistBcn2SpOpen = ProjectSchmetic.Proj_MaxDistBcn2SpOpen.Default;
    Proj_MinDriverSpd = ProjectSchmetic.Proj_MinDriverSpd.Default;
    Proj_RmMaxForwSpd = ProjectSchmetic.Proj_RmMaxForwSpd.Default;
    Proj_RmMaxBackwSpd = ProjectSchmetic.Proj_RmMaxBackwSpd.Default;
    Proj_EumMaxSpd = ProjectSchmetic.Proj_EumMaxSpd.Default;
    Proj_MaxRollBackDist = ProjectSchmetic.Proj_MaxRollBackDist.Default;
    Proj_HandOverCBIDelay = ProjectSchmetic.Proj_HandOverCBIDelay.Default;
    Proj_HandOverZCDelay = ProjectSchmetic.Proj_HandOverZCDelay.Default;
    Proj_Zc2CbiDelay = ProjectSchmetic.Proj_Zc2CbiDelay.Default;
    Proj_Cbi2ZcDelay = ProjectSchmetic.Proj_Cbi2ZcDelay.Default;
    Proj_Zc2CcDelay = ProjectSchmetic.Proj_Zc2CcDelay.Default;
    Proj_Cc2ZcDelay = ProjectSchmetic.Proj_Cc2ZcDelay.Default;
    Proj_Cbi2CcDelay = ProjectSchmetic.Proj_Cbi2CcDelay.Default;
    Proj_Cc2CbiDelay = ProjectSchmetic.Proj_Cc2CbiDelay.Default;
    Proj_IAtpCommMode = ProjectSchmetic.Proj_IAtpCommMode.Default;
    Proj_ReverseTractCmd = ProjectSchmetic.Proj_ReverseTractCmd.Default;
}
