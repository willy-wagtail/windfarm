import { Windfarm } from "../models/windfarm";

export const getMockWindfarm_A: () => Windfarm =
    () => ({
        id: 'a',
        name: 'Windfarm A',
        totalCapacity: 55
    });

export const getMockWindfarm_B: () => Windfarm =
    () => ({
        id: 'b',
        name: 'Windfarm B',
        totalCapacity: 75
    });

export const getMockWindfarmArray: () => Windfarm[] =
    () => ([
        getMockWindfarm_A(),
        getMockWindfarm_B()
    ]);