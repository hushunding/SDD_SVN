/**
 *  @description 参数模板定义文件，定义一般参数描述信息以及常用输入输出类型的约束
 */

export interface NumberScole { type: 'number'; min: number; max: number; step: number; } // 数值类型输入约束
export interface TextScole { type: 'text'; valueset: Set<string>; }    // 文本输入类型约束
export interface OutScole { type: 'output'; min: number; max: number; step: number; } // 输出类型约束,假定为数值类型


/**
 * @description 一般参数条目定义
 */
export interface INormalParamEntry<vT, sT> {
    Desc: string;
    Uint: string;
    Provider: string;
    Scole: sT;
    Default?: vT;
    Comment: string;
}

/**
 * @description 一般参数模板，适用于框架、数值以及备注
 * @template T
 */
export interface NormalParamTmpl<T1, T2 = T1> {
    [key: string]: T1 | T2;
}


export type NumberParamEntry = INormalParamEntry<number, NumberScole>;
export type TextParamEntry = INormalParamEntry<string, TextScole>;
export type CommParamEntry = INormalParamEntry<number | string, NumberScole | TextScole>;

export type NormalParamSchemtic = NormalParamTmpl<CommParamEntry>;   // 参数框架
export type ParamValue = NormalParamTmpl<number | string>;              // 参数值
export type ParamRemark = NormalParamTmpl<string>;                      // 参数模板

export interface DataSchemtic extends CommParamEntry {
    SeqNo: number;
    ParmName: string;
  }

/**
 * @description 参数集合,多种车型组成一个参数。
 */
export interface ParamDataSet<ParamT> {
    paramSerial: Array<{
        Name: string;
        Data: ParamT;
    }>;
    paramRemark: ParamRemark;
    editing: boolean;
    GetData: (index: number) => ParamT;
}


