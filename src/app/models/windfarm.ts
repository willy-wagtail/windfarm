import { Megawatts, isMegawatts } from "./energy-units";

export type WindfarmId = string;

export interface Windfarm {
    readonly id: WindfarmId;
    readonly name: string;
    readonly totalCapacity: Megawatts;
}

export const isWindfarmId =
    (val: any): val is WindfarmId => {
        return !!val &&
            typeof val === "string";
    };

export const isWindfarm =
    (val: any): val is Windfarm => {
        return !!val &&
            typeof val.id === "string" &&
            typeof val.name === "string" &&
            isMegawatts(val.totalCapacity)
    };

export const isWindfarmArray =
    (val: unknown): val is Windfarm[] => {
        if (
            Array.isArray(val) &&
            val.every((v) => isWindfarm(v))
        ) {
            return true;
        }

        return false;
    };
