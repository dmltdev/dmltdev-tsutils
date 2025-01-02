import { type SafeUrl, isSafeUrl } from "../../src/types/SafeUrl";

const urls = [
  "https://www.google.com",
  "https://www.google.com/search?q=hello",
  "https://www.google.com/search?q=hello&oq=hello",
  "https://www.google.com/search?q=hello&oq=hello&aqs=chrome.0.0l8.3913j0j7&sourceid=chrome&ie=UTF-8",
];

console.log(urls.map(isSafeUrl)); // [true, true, true, true]