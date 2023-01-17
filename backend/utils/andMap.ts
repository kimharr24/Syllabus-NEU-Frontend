// eslint-disable-next-line import/prefer-default-export
export function andMap(...args: boolean[]) {
    let result = true;
    args.forEach((arg: boolean) => {
        result = result && arg;
    });
    return result;
}
