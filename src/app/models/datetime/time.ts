export type HourOfDay
    = 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23;

export const isHourOfDay =
    (val: any): val is HourOfDay => {
        return typeof val === 'number'
            && val >= 0
            && val <= 23;
    };