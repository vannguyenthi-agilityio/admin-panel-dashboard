export type FetchFunction<T> = (onError: (error: Error) => void) => Promise<T>;
