/**
 * Wraps a promise execution in a tuple result pattern, ensuring type-safe error handling.
 *
 * @param promise - The promise to be executed
 * @returns A tuple where:
 *          - On success: [undefined, T] where T is the promise result
 *          - On error: [Error, undefined] with a normalized Error instance
 *
 * @example
 * const [error, data] = await withCatch(fetchUser(123));
 * if (error) {
 *   console.error('Failed to fetch user:', error);
 *   return;
 * }
 * console.log('User data:', data);
 */
export async function withCatch<T>(
  promise: Promise<T>
): Promise<[undefined, T] | [Error, undefined]> {
  try {
    const data = await promise;

    return [undefined, data] as [undefined, T];
  } catch (error: unknown) {
    if (error instanceof Error) {
      return [error, undefined] as [Error, undefined];
    }

    if (error === null || error === undefined) {
      return [new Error(`Unknown error: ${error}`), undefined] as [
        Error,
        undefined
      ];
    }

    return [new Error(String(error)), undefined] as [Error, undefined];
  }
}
