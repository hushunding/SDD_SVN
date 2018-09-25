import { NormalParamTmpl, NumberParamEntry } from './ParamTmpl';

export interface ConfigParmTmpl<T> extends NormalParamTmpl<T> {
    Conf_LocDiff: T;
    Conf_MaxSlideBackDist: T;
    Conf_ReleaseSpd: T;
    Conf_SafeMarginDist: T;
    Conf_BilockCycle: T;
    Conf_BizcCycle: T;
    Conf_BiccCycle: T;
    Conf_BiviewCycle: T;
    Conf_Cbi2ZcCycle: T;
    Conf_Zc2CbiCycle: T;
    Conf_Zc2CcCycle: T;
    Conf_Cc2ZcCycle: T;
    Conf_Cc2CbiCycle: T;
    Conf_Cbi2CcCycle: T;
    Conf_Cc2AtsCycle: T;
    Conf_Zc2AtsCycle: T;
    Conf_Cbi2AtsCycle: T;
    Conf_Zc2ZcCycle: T;
    Conf_Cbi2CbiCycle: T;
    Conf_DcsDelay: T;
    Conf_NetworkMargin: T;
    Conf_VobOutTime_CC: T;
    Conf_VibInTime_CC: T;
    Conf_ComOutTime_CC: T;
    Conf_ComInTime_CC: T;
    Conf_ComOutTime_ZC: T;
    Conf_ComInTime_ZC: T;
    Conf_VobOutTime_CBI: T;
    Conf_VibInTime_CBI: T;
    Conf_ComOutTime_CBI: T;
    Conf_ComInTime_CBI: T;
    Conf_PPUProcTime: T;
    Conf_BtmSendDelay: T;
}



export type ConfigParamSchemtic = ConfigParmTmpl<NumberParamEntry>;

export const ConfigSchematic: ConfigParamSchemtic = {

    // todo 待更新Scole
    Conf_LocDiff: {
        Desc: '最大定位误差', Uint: 'm', Provider: '《城市轨道交通CBTC信号系统行业技术规范需求规范》',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 10
    },
    Conf_MaxSlideBackDist: {
        Desc: '后溜安全检测距离', Uint: 'm', Provider: '系统默认配置',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 0.5
    },
    Conf_ReleaseSpd: {
        Desc: '点式释放限速', Uint: 'km/h', Provider: '系统默认配置',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 15
    },
    Conf_SafeMarginDist: {
        Desc: 'ATP安全距离阈量', Uint: 'm', Provider: '系统默认配置',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5
    },
    Conf_BilockCycle: {
        Desc: 'CBI子系统周期', Uint: 'ms', Provider: '系统默认配置',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_BizcCycle: {
        Desc: 'ZC子系统周期', Uint: 'ms', Provider: '系统默认配置',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_BiccCycle: {
        Desc: 'CC子系统周期', Uint: 'ms', Provider: '系统默认配置',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 150
    },
    Conf_BiviewCycle: {
        Desc: 'ATS子系统心跳报文发送周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Cbi2ZcCycle: {
        Desc: 'CBI->ZC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Zc2CbiCycle: {
        Desc: 'ZC->CBI通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Zc2CcCycle: {
        Desc: 'ZC->CC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Cc2ZcCycle: {
        Desc: 'CC->ZC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 300
    },
    Conf_Cc2CbiCycle: {
        Desc: 'CC->CBI通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 150
    },
    Conf_Cbi2CcCycle: {
        Desc: 'CBI->CC通信周期(使用通信环线时，通信周期为250)', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Cc2AtsCycle: {
        Desc: 'CC->ATS通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 300
    },
    Conf_Zc2AtsCycle: {
        Desc: 'ZC->ATS通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Cbi2AtsCycle: {
        Desc: 'CBI->ATS通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Zc2ZcCycle: {
        Desc: 'ZC->ZC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_Cbi2CbiCycle: {
        Desc: 'CBI->CBI通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    },
    Conf_DcsDelay: {
        Desc: 'DCS网络传输延迟+节点恢复时间', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 200
    },
    Conf_NetworkMargin: {
        Desc: '无线网络丢包宽恕', Uint: 'ms', Provider: '系统内部接口规格书',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000
    },
    Conf_VobOutTime_CC: {
        Desc: 'CC业务报文通过VOB板输出延时（含VC板和VOB板处理时间及SR6继电器释放时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_31&38]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 177,
    },
    Conf_VibInTime_CC: {
        Desc: '外部报文通过VIB板到CC业务的延时（含VC板和VIB板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_38]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 430,
    },
    Conf_ComOutTime_CC: {
        Desc: 'CC业务报文通过COM板输出延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 250,
    },
    Conf_ComInTime_CC: {
        Desc: '外部报文通过COM板到CC业务的延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 400,
    },
    Conf_ComOutTime_ZC: {
        Desc: 'ZC业务报文通过COM板输出延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 600,
    },
    Conf_ComInTime_ZC: {
        Desc: '外部报文通过COM板到ZC业务的延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1100,
    },
    Conf_VobOutTime_CBI: {
        Desc: 'CBI业务报文通过VOB板输出延时（含SR6继电器释放时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_31&38]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 587,
    },
    Conf_VibInTime_CBI: {
        Desc: '外部报文通过VIB板到CBI业务的延时（含VC板和VIB板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_38]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1130,
    },
    Conf_ComOutTime_CBI: {
        Desc: 'CBI业务报文通过COM板输出延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 600,
    },
    Conf_ComInTime_CBI: {
        Desc: '外部报文通过COM板到CBI业务的延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1100,
    },
    Conf_PPUProcTime: {
        Desc: 'PPU板处理时间（供ATP采集）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_34]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 150,
    },
    Conf_BtmSendDelay: {
        Desc: '列车经过信标到业务收到信标报文数据的最大延迟', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_34]',
        Comment: '', Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1000
    },
};

export class ConfigParam implements ConfigParmTmpl<number> {
    [key: string]: number;
    Conf_LocDiff = ConfigSchematic.Conf_LocDiff.Default;
    Conf_MaxSlideBackDist = ConfigSchematic.Conf_MaxSlideBackDist.Default;
    Conf_ReleaseSpd = ConfigSchematic.Conf_ReleaseSpd.Default;
    Conf_SafeMarginDist = ConfigSchematic.Conf_SafeMarginDist.Default;
    Conf_BilockCycle = ConfigSchematic.Conf_BilockCycle.Default;
    Conf_BizcCycle = ConfigSchematic.Conf_BizcCycle.Default;
    Conf_BiccCycle = ConfigSchematic.Conf_BiccCycle.Default;
    Conf_BiviewCycle = ConfigSchematic.Conf_BiviewCycle.Default;
    Conf_Cbi2ZcCycle = ConfigSchematic.Conf_Cbi2ZcCycle.Default;
    Conf_Zc2CbiCycle = ConfigSchematic.Conf_Zc2CbiCycle.Default;
    Conf_Zc2CcCycle = ConfigSchematic.Conf_Zc2CcCycle.Default;
    Conf_Cc2ZcCycle = ConfigSchematic.Conf_Cc2ZcCycle.Default;
    Conf_Cc2CbiCycle = ConfigSchematic.Conf_Cc2CbiCycle.Default;
    Conf_Cbi2CcCycle = ConfigSchematic.Conf_Cbi2CcCycle.Default;
    Conf_Cc2AtsCycle = ConfigSchematic.Conf_Cc2AtsCycle.Default;
    Conf_Zc2AtsCycle = ConfigSchematic.Conf_Zc2AtsCycle.Default;
    Conf_Cbi2AtsCycle = ConfigSchematic.Conf_Cbi2AtsCycle.Default;
    Conf_Zc2ZcCycle = ConfigSchematic.Conf_Zc2ZcCycle.Default;
    Conf_Cbi2CbiCycle = ConfigSchematic.Conf_Cbi2CbiCycle.Default;
    Conf_DcsDelay = ConfigSchematic.Conf_DcsDelay.Default;
    Conf_NetworkMargin = ConfigSchematic.Conf_NetworkMargin.Default;
    get Conf_VobOutTime_CC() { return this.Conf_BiccCycle + 2 + 25; }
    get Conf_VibInTime_CC() { return 2 * this.Conf_BiccCycle + 130; }
    get Conf_ComOutTime_CC() { return this.Conf_BiccCycle + 100; }
    get Conf_ComInTime_CC() { return 2 * this.Conf_BiccCycle + 100; }
    get Conf_ComOutTime_ZC() { return this.Conf_BizcCycle + 100; }
    get Conf_ComInTime_ZC() { return this.Conf_BizcCycle * 2 + 100; }
    get Conf_VobOutTime_CBI() { return this.Conf_BilockCycle + 2 + 25 + 60; }
    get Conf_VibInTime_CBI() { return this.Conf_BilockCycle * 2 + 130; }
    get Conf_ComOutTime_CBI() { return this.Conf_BilockCycle + 100; }
    get Conf_ComInTime_CBI() { return this.Conf_BilockCycle * 2 + 100; }
    get Conf_PPUProcTime() { return this.Conf_BiccCycle; }
    Conf_BtmSendDelay = ConfigSchematic.Conf_BtmSendDelay.Default;
}

