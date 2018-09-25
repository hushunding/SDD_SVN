import { NormalParamTmpl, NumberParamEntry, TextParamEntry } from './ParamTmpl';
import { VehicleParam } from './Vehicle';
import { EquipParam } from './Equip';
import { ProjectParam } from './Project';
import { ConfigParam } from './Config';
import { SingalNameSet, CBINameSet, BcnNameSet, SectionNameSet, BoolTextSet } from './DevSet';
import { SysCommParam } from './SysComm';

export interface SysRouteParmTmpl<T1, T2> extends NormalParamTmpl<T1, T2> {
    CBI_UID: T2;
    RouteName: T2;
    StartSignal: T2;
    EndSignal: T2;
    RouteLength: T1;
    ApSR: T1;
    MaxSR: T1;
    WorstApGrade: T1;
    AvgApGrade: T1;
    RouteWorstGrade: T1;
    IATPCommType: T2;
    Previewer: T2;
    PreviewDist: T1;
    ApBeacon: T2;
    ApBcn2Axel: T1;
    BerthSection: T2;
    WellTime: T1;
    BerthSectLen: T1;
    BerthSectWorstGrade: T1;
    OL: T2;
    isOverLockZone: T2;
    O_ApLength: T1;
    CFG_T_ROUTE_VALID_DMC: T1;
    CFG_T_LCROUTE_RELEASE_DMC: T1;
    CFG_T_ROUTE_VALID_IMC: T1;
    CFG_T_LCROUTE_RELEASE_IMC: T1;
    SPKS_ACT_TIME: T1;
    CFG_T_OVERLAP_VALID_BERTH: T1;
    CFG_T_BERTHSEC_OVERLAP_RELEASE: T1;
    CFG_T_OVERLAP_VALID_ROUTE: T1;
    CFG_T_ROUTE_OVERLAP_RELEASE: T1;
    CFG_T_YDROUTE_RELEASE: T1;
}

export type SysRouteParamSchemtic = SysRouteParmTmpl<NumberParamEntry, TextParamEntry>;

export const SysRouteSchemtic: SysRouteParamSchemtic = {
    // todo 添加起始计轴
    CBI_UID: {
        Desc: '联锁区', Uint: '', Provider: '', Scole: { type: 'text', valueset: CBINameSet }, Comment: ''
    },
    RouteName: {
        Desc: '进路名', Uint: '', Provider: '', Scole: { type: 'text', valueset: new Set<string>() }, Comment: ''
    },
    StartSignal: {
        Desc: '始端信号机', Uint: '', Provider: '', Scole: { type: 'text', valueset: SingalNameSet }, Comment: ''
    },
    EndSignal: {
        Desc: '终端信号机', Uint: '', Provider: '', Scole: { type: 'text', valueset: SingalNameSet }, Comment: ''
    },
    RouteLength: {
        Desc: '进路长度（计轴 - 计轴）', Uint: 'm', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    ApSR: {
        Desc: '接近限速', Uint: 'km/h', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '取预告信标上游第一个计轴点到下游信号机区间的最大限速，当计算接近区段长度比该计轴点与进路始端信号机处计轴点间距离长，取上游第二个计轴点，以此类推；'
    },
    MaxSR: {
        Desc: '最大进路限速', Uint: 'km/h', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    WorstApGrade: {
        Desc: '最差接近坡度', Uint: '‰', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '上坡为正、下坡为负；\n取接近区段安全制动距离内带符号最小平均值；若计算所得安全制动距离范围内平均坡度比该值小，需重新计算'
    },
    AvgApGrade: {
        Desc: '平均坡度起算点至信号机距离m', Uint: '', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '(最差接近坡度非平均坡度时，填N/A)'
    },
    RouteWorstGrade: {
        Desc: '进路最差坡度', Uint: '‰', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    IATPCommType: {
        Desc: '点式车地通信方式', Uint: '', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['Type_Beacon', 'Type_Loop', 'N/A']) }, Comment: ''
    },
    Previewer: {
        Desc: '预告信标/环线无则填N/A）', Uint: '', Provider: '', Scole: { type: 'text', valueset: BcnNameSet }, Comment: ''
    },
    PreviewDist: {
        Desc: '预告信标到计轴距离', Uint: 'm', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    ApBeacon: {
        Desc: '接近信标（无则填N/A）', Uint: '', Provider: '', Scole: { type: 'text', valueset: BcnNameSet }, Comment: ''
    },
    ApBcn2Axel: {
        Desc: '接近信标到计轴距离m', Uint: '', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    BerthSection: {
        Desc: '泊车区段', Uint: '', Provider: '', Scole: { type: 'text', valueset: SectionNameSet }, Comment: ''
    },
    WellTime: {
        Desc: '泊车区段停车时间(无站停业务填0）', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    BerthSectLen: {
        Desc: '泊车区段长度', Uint: 'm', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    BerthSectWorstGrade: {
        Desc: '泊车区段最差坡度', Uint: '‰', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Comment: ''
    },
    OL: {
        Desc: '保护区段', Uint: '', Provider: '', Scole: { type: 'text', valueset: SectionNameSet }, Comment: ''
    },
    isOverLockZone: {
        Desc: '接近区段跨联锁区', Uint: '', Provider: '', Scole: { type: 'text', valueset: BoolTextSet }, Comment: ''
    },
    O_ApLength: {
        Desc: '接近区段长度', Uint: 'm', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置不得小于该值'
    },
    CFG_T_ROUTE_VALID_DMC: {
        Desc: 'ATP点式MAL有效时间s(DMC)', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置以该值为准'
    },
    CFG_T_LCROUTE_RELEASE_DMC: {
        Desc: '联锁进路总人解延迟时间s(DMC)', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置不得小于该值'
    },
    CFG_T_ROUTE_VALID_IMC: {
        Desc: 'ATP点式MAL有效时间s(IMC)', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置以该值为准'
    },
    CFG_T_LCROUTE_RELEASE_IMC: {
        Desc: '联锁进路总人解延迟时间s(IMC)', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置不得小于该值'
    },
    SPKS_ACT_TIME: {
        Desc: 'SPKS表示灯激活延迟时间s', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '以各进路总人解延迟时间自行配置'
    },
    CFG_T_OVERLAP_VALID_BERTH: {
        Desc: '泊车过程中ATP保护区段有效时间s', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置以该值为准'
    },
    CFG_T_BERTHSEC_OVERLAP_RELEASE: {
        Desc: '保护区段泊车区段预取消时间s', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置不得小于该值'
    },
    CFG_T_OVERLAP_VALID_ROUTE: {
        Desc: '轧入进路后ATP保护区段最大有效时间s', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置以该值为准'
    },
    CFG_T_ROUTE_OVERLAP_RELEASE: {
        Desc: '保护区段进路总取消时间s', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置不得小于该值'
    },
    CFG_T_YDROUTE_RELEASE: {
        Desc: '引导进路延迟解锁时间s', Uint: 's', Provider: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 },
        Comment: '工程配置不得小于该值'
    }

};

function GetSpecValueofArray(dataArray: any[], attr: string, res: number, func: (a1, a2) => number) {
    for (const data of dataArray) {
        res = func(res, data[attr]);
    }
    return res;
}
export type SysRouteParam = SysRouteParmTmpl<number, string>;
// 通用的进路参数,提供统一的输入以及合并后的输出
export class SysRouteParamCom implements SysRouteParmTmpl<number, string> {
    CBI_UID = '';
    RouteName = '';
    StartSignal = '';
    EndSignal = '';
    RouteLength = 100;
    ApSR = 80;
    MaxSR = 80;
    WorstApGrade = 0;
    AvgApGrade = 0;
    RouteWorstGrade = 0;
    IATPCommType = '';
    Previewer = '';
    PreviewDist = 100;
    ApBeacon = '';
    ApBcn2Axel = 100;
    BerthSection = '';
    WellTime = 30;
    BerthSectLen = 120;
    BerthSectWorstGrade = 0;
    OL = '';
    isOverLockZone = '';
    get O_ApLength() { return GetSpecValueofArray(this.trainRouteList, 'O_ApLength', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_ROUTE_VALID_DMC() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_ROUTE_VALID_DMC', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_LCROUTE_RELEASE_DMC() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_LCROUTE_RELEASE_DMC', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_ROUTE_VALID_IMC() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_ROUTE_VALID_IMC', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_LCROUTE_RELEASE_IMC() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_LCROUTE_RELEASE_IMC', Number.MIN_SAFE_INTEGER, Math.max); }
    get SPKS_ACT_TIME() { return GetSpecValueofArray(this.trainRouteList, 'SPKS_ACT_TIME', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_OVERLAP_VALID_BERTH() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_OVERLAP_VALID_BERTH', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_BERTHSEC_OVERLAP_RELEASE() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_BERTHSEC_OVERLAP_RELEASE', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_OVERLAP_VALID_ROUTE() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_OVERLAP_VALID_ROUTE', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_ROUTE_OVERLAP_RELEASE() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_ROUTE_OVERLAP_RELEASE', Number.MIN_SAFE_INTEGER, Math.max); }
    get CFG_T_YDROUTE_RELEASE() { return GetSpecValueofArray(this.trainRouteList, 'CFG_T_YDROUTE_RELEASE', Number.MIN_SAFE_INTEGER, Math.max); }
    [key: string]: string | number | any;

    private trainRouteList = new Array<SysRouteParamSingle>();

    constructor() {

    }

    NewSignalRouteParam(vhl: VehicleParam, equ: EquipParam, prj: ProjectParam, cnf: ConfigParam, com: SysCommParam) {
        const single = new SysRouteParamSingle(vhl, equ, prj, cnf, com, this);
        this.trainRouteList.push(single);
        return single;
    }
    RemoveConfig(i: number) {
        this.trainRouteList = this.trainRouteList.filter((v, fi) => fi !== i);
    }
}

// 单车参数,输入与通用同源，todo 后续再提供独立的参数设置对象
export class SysRouteParamSingle implements SysRouteParmTmpl<number, string> {
    get CBI_UID() {
        return this.routeCom.CBI_UID;
    }
    get RouteName() {
        return this.routeCom.RouteName;
    }
    get StartSignal() {
        return this.routeCom.StartSignal;
    }
    get EndSignal() {
        return this.routeCom.EndSignal;
    }
    get RouteLength() {
        return this.routeCom.RouteLength;
    }
    get ApSR() {
        return this.routeCom.ApSR;
    }
    get MaxSR() {
        return this.routeCom.MaxSR;
    }
    get WorstApGrade() {
        return this.routeCom.WorstApGrade;
    }
    get AvgApGrade() {
        return this.routeCom.AvgApGrade;
    }
    get RouteWorstGrade() {
        return this.routeCom.RouteWorstGrade;
    }
    get IATPCommType() {
        return this.routeCom.IATPCommType;
    }
    get Previewer() {
        return this.routeCom.Previewer;
    }
    get PreviewDist() {
        return this.routeCom.PreviewDist;
    }
    get ApBeacon() {
        return this.routeCom.ApBeacon;
    }
    get ApBcn2Axel() {
        return this.routeCom.ApBcn2Axel;
    }
    get BerthSection() {
        return this.routeCom.BerthSection;
    }
    get WellTime() {
        return this.routeCom.WellTime;
    }
    get BerthSectLen() {
        return this.routeCom.BerthSectLen;
    }
    get BerthSectWorstGrade() {
        return this.routeCom.BerthSectWorstGrade;
    }
    get OL() {
        return this.routeCom.OL;
    }
    get isOverLockZone() {
        return this.routeCom.isOverLockZone;
    }
    get O_ApLength() { return -1; }
    get CFG_T_ROUTE_VALID_DMC() { return -1; }
    get CFG_T_LCROUTE_RELEASE_DMC() { return -1; }
    get CFG_T_ROUTE_VALID_IMC() { return -1; }
    get CFG_T_LCROUTE_RELEASE_IMC() { return -1; }
    get SPKS_ACT_TIME() { return -1; }
    get CFG_T_OVERLAP_VALID_BERTH() { return -1; }
    get CFG_T_BERTHSEC_OVERLAP_RELEASE() { return -1; }
    get CFG_T_OVERLAP_VALID_ROUTE() { return -1; }
    get CFG_T_ROUTE_OVERLAP_RELEASE() { return -1; }
    get CFG_T_YDROUTE_RELEASE() { return -1; }
    [key: string]: string | number | any;

    constructor(private vhl: VehicleParam, private equ: EquipParam,
        private prj: ProjectParam, private cnf: ConfigParam,
        private com: SysCommParam, private routeCom: SysRouteParamCom) {

    }

}
