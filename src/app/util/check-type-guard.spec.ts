import { checkTypeGuard } from "./check-type-guard";

interface TestPerson {
    name: string;
    age: number;
}

const isTestPerson =
    (value: any): value is TestPerson => {
        return (
            value &&
            typeof value.name === "string" &&
            typeof value.age === "number"
        );
    };

describe('checkTypeGuard function', () => {

    it('does not throw if type guard passes', () => {
        let value = {
            name: 'William',
            age: 50
        };

        expect(() => checkTypeGuard(value, isTestPerson))
            .not
            .toThrow();
    });

    it('throws default error if type guard fails', () => {
        let value: any = {
            name: 50,
            age: 'William'
        }; // name and age has wrong types

        expect(() => checkTypeGuard(value, isTestPerson))
            .toThrowError('TypeGuard check failed.');
    });

    it('throws custom error if type guard fails', () => {
        let value: any = {
            name: 50,
            age: 'William'
        };

        let customErrorMsg = 'Custom error message';

        expect(
            () => checkTypeGuard(value, isTestPerson, customErrorMsg)
        ).toThrowError(customErrorMsg);

    });
});