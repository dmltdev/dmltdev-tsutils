type Tld = "com" | "org" | "net" | "io";

type SafeUrl<TUrl extends string> =
  TUrl extends `${infer Protocol}://${infer Domain}.${infer Extension}`
    ? Protocol extends "" | undefined
      ? never
      : Domain extends "" | undefined
      ? never
      : Extension extends Tld
      ? TUrl
      : never
    : never;

function isSafeUrl<TUrl extends string>(value: TUrl): value is SafeUrl<TUrl> {
  if (typeof value !== "string") return false;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export { type SafeUrl, isSafeUrl };
