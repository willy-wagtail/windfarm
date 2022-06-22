export type Megawatts = number;

export type MegawattsPerHour = number;

export const isMegawatts =
    (val: any): val is Megawatts => typeof val === 'number';
