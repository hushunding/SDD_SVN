import { NormalParamTmpl, NumberParamEntry, TextParamEntry } from './ParamTmpl';
import { VehicleParam } from './Vehicle';
import { EquipParam } from './Equip';
import { ProjectParam } from './Project';
import { ConfigParam } from './Config';

export interface SysCommParmTmpl<T1, T2> extends NormalParamTmpl<T1, T2> {
    CFG_T_CBI_ALIVE_TO_ZC: T1;
    CFG_T_ZC_ALIVE_TO_CBI: T1;
    CFG_T_ZC_ALIVE_TO_CC: T1;
    CFG_T_CC_ALIVE_TO_ZC: T1;
    CFG_T_CC_ALIVE_TO_CBI: T1;
    CFG_T_CBI_ALIVE_TO_CC: T1;
    CFG_T_CC_ALIVE_TO_ATS: T1;
    CFG_T_ATS_ALIVE_TO_CC: T1;
    CFG_T_ZC_ALIVE_TO_ATS: T1;
    CFG_T_ATS_ALIVE_TO_ZC: T1;
    CFG_T_CBI_ALIVE_TO_ATS: T1;
    CFG_T_CBI_ALIVE_TO_CBI: T1;
    CFG_T_ZC_ALIVE_TO_ZC: T1;
    CFG_L_MIN_DIST_IN_2_WDCBCN: T1;
    CFG_L_MAX_DIST_IN_2_WDCBCN: T1;
    CFG_T_OPG_OPG_VERIFY: T1;
    CFG_T_MAX_BCN_DELAY: T1;
    CFG_ERR_MAX_LOC: T1;
    CFG_D_SEC_APPROACH: T2;
    CFG_T_LCROUTE_RELEASE_DMC: T2;
    CFG_T_LCROUTE_RELEASE_IMC: T2;
    CFG_T_YDROUTE_RELEASE: T2;
    CFG_T_BERTHSEC_OVERLAP_RELEASE: T2;
    CFG_T_ROUTE_OVERLAP_RELEASE: T2;
    CFG_T_SPKS_ACTIVE: T2;
    CFG_T_OVERLAP_ZC_TIMEOUT: T1;
    CFG_T_PASS_SIGNAL: T1;
    CFG_L_RS_HEAD_FILTER: T1;
    CFG_L_RS_REAR_FILTER: T1;
    CFG_D_SAFETY_MARGIN: T1;
    CFG_L_MAX_MAL_ON_OVERLAP: T1;
    CFG_L_MIN_MAL_ON_OVERLAP: T1;
    CFG_D_MAX_REV_DIST: T1;
    CFG_D_RS_BUFFER: T1;
    CFG_T_ROUTE_VALID_DMC: T2;
    CFG_T_ROUTE_VALID_IMC: T2;
    CFG_T_OVERLAP_VALID_BERTH: T2;
    CFG_T_OVERLAP_VALID_ROUTE: T2;
    CFG_D_MAX_ROLL_AWAY: T1;
    CFG_D_ROLL_AWAY_DETECT: T1;
    CFG_V_MAX_JUMP_DEPOT: T1;
    CFG_D_MAX_JUMP_DEPOT: T1;
    CFG_V_ATPOPEN_SPD: T1;
    CFG_T_EB_OUT: T1;
    CFG_T_EB_SETUP: T1;
    CFG_T_PSD_STATUS_CONFIRM: T1;

}
export type SysCommParamSchemtic = SysCommParmTmpl<NumberParamEntry, TextParamEntry>;

export const SysCommSchemtic: SysCommParamSchemtic = {
    // todo 待更新Scole
    CFG_T_CBI_ALIVE_TO_ZC: {
        Desc: 'ZC检测CBI周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000, Comment: ''
    },
    CFG_T_ZC_ALIVE_TO_CBI: {
        Desc: 'CBI检测ZC周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000, Comment: ''
    },
    CFG_T_ZC_ALIVE_TO_CC: {
        Desc: 'CC检测ZC周期报文通信超时的有效时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5000, Comment: ''
    },
    CFG_T_CC_ALIVE_TO_ZC: {
        Desc: 'ZC检测CC周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 6000, Comment: ''
    },
    CFG_T_CC_ALIVE_TO_CBI: {
        Desc: '在增强点式状态下，CBI可容忍的CC周期报文通信最大超时时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5000, Comment: ''
    },
    CFG_T_CBI_ALIVE_TO_CC: {
        Desc: '在增强点式状态下，CC可容忍的CBI周期报文通信最大超时时间 ', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5000, Comment: ''
    },
    CFG_T_CC_ALIVE_TO_ATS: {
        Desc: 'ATS检测CC周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5000, Comment: ''
    },
    CFG_T_ATS_ALIVE_TO_CC: {
        Desc: 'CC检测ATS周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5000, Comment: ''
    },
    CFG_T_ZC_ALIVE_TO_ATS: {
        Desc: 'ATS检测ZC周期报文通信超时的有效时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 2000, Comment: ''
    },
    CFG_T_ATS_ALIVE_TO_ZC: {
        Desc: 'ZC检测ATS周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000, Comment: ''
    },
    CFG_T_CBI_ALIVE_TO_ATS: {
        Desc: 'ATS检测CBI周期报文通信超时的有效时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 2000, Comment: ''
    },
    CFG_T_CBI_ALIVE_TO_CBI: {
        Desc: 'CBI检测CBI周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000, Comment: ''
    },
    CFG_T_ZC_ALIVE_TO_ZC: {
        Desc: 'ZC检测ZC周期报文通信超时的宽恕时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000, Comment: ''
    },
    CFG_L_MIN_DIST_IN_2_WDCBCN: {
        Desc: '轮径校准过程中，所能接受的两个校准信标的最小间距 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 44000, Comment: ''
    },
    CFG_L_MAX_DIST_IN_2_WDCBCN: {
        Desc: '轮径校准过程中，所能接受的两个校准信标的最大间距 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 176000, Comment: ''
    },
    CFG_T_OPG_OPG_VERIFY: {
        Desc: 'OPG之间速度不一致时的宽恕时间，用来对偶发的干扰情况进行过滤以提高可用性 ', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 450, Comment: ''
    },
    CFG_T_MAX_BCN_DELAY: {
        Desc: '从信标读取设备获取到信标到交由ATP业务软件的最大延迟 ', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1000, Comment: ''
    },
    CFG_ERR_MAX_LOC: {
        Desc: 'ATP最大定位不确定性范围', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 20000, Comment: ''
    },
    CFG_D_SEC_APPROACH: {
        Desc: '接近区段长度', Uint: 'mm', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_LCROUTE_RELEASE_DMC: {
        Desc: '联锁进路的总人解延迟时间(DMC)', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_LCROUTE_RELEASE_IMC: {
        Desc: '联锁进路的总人解延迟时间(IMC)', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_YDROUTE_RELEASE: {
        Desc: '联锁引导进路的延迟解锁时间', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_BERTHSEC_OVERLAP_RELEASE: {
        Desc: '联锁保护区段泊车区段预取消时间', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_ROUTE_OVERLAP_RELEASE: {
        Desc: '联锁保护区段进路总取消时间（点式下或非通信车采用），参照“系统进路参数表”', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_SPKS_ACTIVE: {
        Desc: 'SPKS表示灯激活延迟时间', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_OVERLAP_ZC_TIMEOUT: {
        Desc: '联锁在ZC申请保护区段建立后连接中断的保护区段延迟解锁时间（CBTC下采用）', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 120000, Comment: '由于CBI参数配置不区分车辆编组，所以此处计算需考虑各种编组的最差参数'
    },
    CFG_T_PASS_SIGNAL: {
        Desc: 'ZC向CBI发送列车通过信号的持续时间 ', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000, Comment: ''
    },
    CFG_L_RS_HEAD_FILTER: {
        Desc: '用于通信列车车头筛选的距离 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 23987, Comment: ''
    },
    CFG_L_RS_REAR_FILTER: {
        Desc: '用于通信列车车尾筛选的距离 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 23987, Comment: ''
    },
    CFG_D_SAFETY_MARGIN: {
        Desc: '与危险边界预留的余量，作为列车与危险边界的固定隔离距离 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5000, Comment: ''
    },
    CFG_L_MAX_MAL_ON_OVERLAP: {
        Desc: '移动授权占用保护区段的最大长度', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 108000, Comment: '车辆编组影响项'
    },
    CFG_L_MIN_MAL_ON_OVERLAP: {
        Desc: '移动授权占用保护区段的最小长度', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 28000, Comment: '车辆编组影响项'
    },
    CFG_D_MAX_REV_DIST: {
        Desc: '在ATP防护下，可能的列车最大退行距离 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 82000, Comment: '车辆编组影响项'
    },
    CFG_D_RS_BUFFER: {
        Desc: 'CBTC列车与非通信列车之间的缓冲距离 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 164000, Comment: '由于ZC参数配置不区分车辆编组，所以此处计算需考虑各种编组的最差参数'
    },
    CFG_T_ROUTE_VALID_DMC: {
        Desc: 'ATP对更新的前方进路信息的有效性宽恕时间（DMC）', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_ROUTE_VALID_IMC: {
        Desc: 'ATP对更新的前方进路信息的有效性宽恕时间（IMC）点式非基于信标时，与点式MAL DMC时间相同', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_OVERLAP_VALID_BERTH: {
        Desc: 'ATP所使用的泊车过程中的保护区段有效时间', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_T_OVERLAP_VALID_ROUTE: {
        Desc: '点式授权超出当前区段部分的最大有效时间。即当ATP已确认占用进路后，超出此进路的点式移动授权的最大有效时间，时间到期后，点式MAL应回撤至当前进路终端', Uint: 'ms', Provider: '',
        Scole: { type: 'text', valueset: new Set<string>(['N/A']) }, Default: 'N/A', Comment: '参照“输出-系统进路参数”'
    },
    CFG_D_MAX_ROLL_AWAY: {
        Desc: '在ATP防护下，可能的列车最大后溜距离 ', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 76000, Comment: '车辆编组影响项'
    },
    CFG_D_ROLL_AWAY_DETECT: {
        Desc: '列车后溜EB触发距离', Uint: 'm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 0.5, Comment: ''
    },
    CFG_V_MAX_JUMP_DEPOT: {
        Desc: 'ATP监督下车辆段列车最大跳跃速度，若该值小于或等于零，表示不满足跳跃安全距离要求，需与运营方沟通确定方案', Uint: 'km/h', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1.2, Comment: '车辆编组影响项'
    },
    CFG_D_MAX_JUMP_DEPOT: {
        Desc: 'ATP监督下车辆段列车最大跳跃距离', Uint: 'mm', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 63.13, Comment: '车辆编组影响项'
    },
    CFG_V_ATPOPEN_SPD: {
        Desc: 'ATP监督下的开口速度，小于可用性要求最低限速时不可用，应与运营方协商最终方案', Uint: 'km/h', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5.09, Comment: '车辆编组影响项'
    },
    CFG_T_EB_OUT: {
        Desc: '列车检测EB至牵引切除时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1927, Comment: '车辆编组影响项'
    },
    CFG_T_EB_SETUP: {
        Desc: '列车牵引切除至建立可保证EB制动率时间', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1400, Comment: '车辆编组影响项'
    },
    CFG_T_PSD_STATUS_CONFIRM: {
        Desc: '联锁发出PSD使能/开门命令到确认PSD打开的延迟时间 ', Uint: 'ms', Provider: '',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000, Comment: ''
    },
};

export class SysCommParam implements SysCommParmTmpl<number, string> {
    [key: string]: string | number | any;

    constructor(private vhl: VehicleParam, private equ: EquipParam, private prj: ProjectParam, private cnf: ConfigParam) {

    }
    GetInputSet() {
        return {
            vhl: this.vhl,
            equ: this.equ,
            prj: this.prj,
            cnf: this.cnf,
            com: this
        };
    }
    // todo 待更新公式
    get CFG_T_CBI_ALIVE_TO_ZC() { return -1; }
    get CFG_T_ZC_ALIVE_TO_CBI() { return -1; }
    get CFG_T_ZC_ALIVE_TO_CC() { return -1; }
    get CFG_T_CC_ALIVE_TO_ZC() { return -1; }
    get CFG_T_CC_ALIVE_TO_CBI() { return -1; }
    get CFG_T_CBI_ALIVE_TO_CC() { return -1; }
    get CFG_T_CC_ALIVE_TO_ATS() { return -1; }
    get CFG_T_ATS_ALIVE_TO_CC() { return -1; }
    get CFG_T_ZC_ALIVE_TO_ATS() { return -1; }
    get CFG_T_ATS_ALIVE_TO_ZC() { return -1; }
    get CFG_T_CBI_ALIVE_TO_ATS() { return -1; }
    get CFG_T_CBI_ALIVE_TO_CBI() { return -1; }
    get CFG_T_ZC_ALIVE_TO_ZC() { return -1; }
    get CFG_L_MIN_DIST_IN_2_WDCBCN() { return -1; }
    get CFG_L_MAX_DIST_IN_2_WDCBCN() { return -1; }
    get CFG_T_OPG_OPG_VERIFY() { return -1; }
    get CFG_T_MAX_BCN_DELAY() { return -1; }
    get CFG_ERR_MAX_LOC() { return -1; }
    get CFG_D_SEC_APPROACH() { return 'N/A'; }
    get CFG_T_LCROUTE_RELEASE_DMC() { return 'N/A'; }
    get CFG_T_LCROUTE_RELEASE_IMC() { return 'N/A'; }
    get CFG_T_YDROUTE_RELEASE() { return 'N/A'; }
    get CFG_T_BERTHSEC_OVERLAP_RELEASE() { return 'N/A'; }
    get CFG_T_ROUTE_OVERLAP_RELEASE() { return 'N/A'; }
    get CFG_T_SPKS_ACTIVE() { return 'N/A'; }
    get CFG_T_OVERLAP_ZC_TIMEOUT() { return -1; }
    get CFG_T_PASS_SIGNAL() { return -1; }
    get CFG_L_RS_HEAD_FILTER() { return -1; }
    get CFG_L_RS_REAR_FILTER() { return -1; }
    get CFG_D_SAFETY_MARGIN() { return -1; }
    get CFG_L_MAX_MAL_ON_OVERLAP() { return -1; }
    get CFG_L_MIN_MAL_ON_OVERLAP() { return -1; }
    get CFG_D_MAX_REV_DIST() { return -1; }
    get CFG_D_RS_BUFFER() { return -1; }
    get CFG_T_ROUTE_VALID_DMC() { return 'N/A'; }
    get CFG_T_ROUTE_VALID_IMC() { return 'N/A'; }
    get CFG_T_OVERLAP_VALID_BERTH() { return 'N/A'; }
    get CFG_T_OVERLAP_VALID_ROUTE() { return 'N/A'; }
    get CFG_D_MAX_ROLL_AWAY() { return -1; }
    get CFG_D_ROLL_AWAY_DETECT() { return -1; }
    get CFG_V_MAX_JUMP_DEPOT() { return -1; }
    get CFG_D_MAX_JUMP_DEPOT() { return -1; }
    get CFG_V_ATPOPEN_SPD() { return -1; }
    get CFG_T_EB_OUT() { return -1; }
    get CFG_T_EB_SETUP() { return -1; }
    get CFG_T_PSD_STATUS_CONFIRM() { return -1; }
}
