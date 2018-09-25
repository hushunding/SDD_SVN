export interface BasicDev {
    Name: string;
}
export interface PointDev extends BasicDev {
    Location: string;
    LineNo: string;
    offset: number;
}

export interface SignalInfo extends PointDev {
    Direction: string;
}

export interface BeaconInfo extends PointDev {
    Type: string;
}

export interface SectionInfo extends BasicDev {

}
export const SingalNameSet = new Set<string>();
export const CBINameSet = new Set<string>();
export const BcnNameSet = new Set<string>();
export const SectionNameSet = new Set<string>();

export const BoolTextSet = new Set<string>(['TRUE', 'FALSE']);
