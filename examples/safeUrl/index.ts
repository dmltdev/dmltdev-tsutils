import { type SafeUrl, isSafeUrl } from "../../src/types/SafeUrl";

console.log(isSafeUrl("https://www.google.com"));
console.log(isSafeUrl("https://www.google.com/search?q=hello"));
console.log(isSafeUrl("not-a-url"));

type ApiUrl = SafeUrl<"http://localhost:3000">;

const apiUrl: ApiUrl = "http://localhost:3000" as ApiUrl;
