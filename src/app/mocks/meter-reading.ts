import { ISODateString } from "../models/datetime/date";
import { MeterReading } from "../models/meter-reading";

export const getMockMeterReading_A: () => MeterReading =
    () => ({
        timestamp: '2022-06-25T17:01:30.490Z',
        reading: 8
    });

export const getMockMeterReading_B: () => MeterReading =
    () => ({
        timestamp: '2022-06-26T13:01:30.490Z',
        reading: 15
    });

export const getMockMeterReadingArray: () => MeterReading[] =
    () => ([
        getMockMeterReading_A(),
        getMockMeterReading_B()
    ]);

export const getMockMeterReadings_forOneDay: (date?: ISODateString) => MeterReading[] =
    (date = '2022-05-12') => ([
        { timestamp: `${date}T00:00:47.840Z`, reading: 8 },
        { timestamp: `${date}T01:00:47.840Z`, reading: 9 },
        { timestamp: `${date}T02:00:47.840Z`, reading: 7 },
        { timestamp: `${date}T03:00:47.840Z`, reading: 11 },
        { timestamp: `${date}T04:00:47.840Z`, reading: 6 },
        { timestamp: `${date}T05:00:47.840Z`, reading: 7 },
        { timestamp: `${date}T06:00:47.840Z`, reading: 4 },
        { timestamp: `${date}T07:00:47.840Z`, reading: 6 },
        { timestamp: `${date}T08:00:47.840Z`, reading: 7 },
        { timestamp: `${date}T09:00:47.840Z`, reading: 16 },
        { timestamp: `${date}T10:00:47.840Z`, reading: 11 },
        { timestamp: `${date}T11:00:47.840Z`, reading: 5 },
        { timestamp: `${date}T12:00:47.840Z`, reading: 6 },
        { timestamp: `${date}T13:00:47.840Z`, reading: 10 },
        { timestamp: `${date}T14:00:47.840Z`, reading: 8 },
        { timestamp: `${date}T15:00:47.840Z`, reading: 9 },
        { timestamp: `${date}T16:00:47.840Z`, reading: 3 },
        { timestamp: `${date}T17:00:47.840Z`, reading: 2 },
        { timestamp: `${date}T18:00:47.840Z`, reading: 1 },
        { timestamp: `${date}T19:00:47.840Z`, reading: 0 },
        { timestamp: `${date}T20:00:47.840Z`, reading: 4 },
        { timestamp: `${date}T21:00:47.840Z`, reading: 8 },
        { timestamp: `${date}T22:00:47.840Z`, reading: 11 },
        { timestamp: `${date}T23:00:47.840Z`, reading: 5 },
    ]);