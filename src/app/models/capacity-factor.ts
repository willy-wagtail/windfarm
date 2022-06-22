
import { DateRange } from "./date-range";

/**
 * The capacity factor for any given period of time 
 * is the amount of electricity produced, divided 
 * by the maximum possible amount of electricity that 
 * could have been produced if at full capacity.
 */

export type CapacityFactor = number;

export interface CapacityFactorOverPeriod {
    readonly period: DateRange;
    readonly capacityFactory: CapacityFactor;
}