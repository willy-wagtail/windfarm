export type Megawatts = number;

export type MegawattHour = number;

export const isMegawatts =
    (val: any): val is Megawatts => typeof val === 'number';

export const isMegawattHour =
    (val: any): val is MegawattHour => typeof val === 'number';
