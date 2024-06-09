export function notNull<T>(value: T | null | undefined): value is T {
    return value !== null;
}

export function notUndefined<T>(value: T | null | undefined): value is T {
    return value !== undefined;
}

export function notEmpty<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

export function onlyUnique<T>(value: T | null | undefined, index: number, array: Array<any>): value is T {
    return array.indexOf(value) === index;
}
