/**
 * Wraps a promise in a try/catch block and returns the result as a tuple.
 *
 * @param promise - The promise to wrap.
 * @returns A tuple containing the result of the promise or an error if it fails.
 */
export async function withCatch<T>(
  promise: Promise<T>
): Promise<[undefined, T] | [Error | unknown, undefined]> {
  try {
    const data = await promise;

    return [undefined, data] as [undefined, T];
  } catch (error: unknown) {
    if (error instanceof Error) {
      return [error, undefined] as [Error, undefined];
    }

    return [error, undefined] as [unknown, undefined];
  }
}
