export const checkTypeGuard =
    <T, R extends T>(
        value: T,
        typeGuard: (value: T) => value is R,
        errorMsg?: string
    ): void => {
        if (!typeGuard(value)) {
            throw new Error(errorMsg || "TypeGuard check failed.");
        }
    }