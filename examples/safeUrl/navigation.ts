import { type SafeUrl } from "../../src/types/SafeUrl";

type NavigationUrl = SafeUrl<string>;

interface NavigationLink {
  label: string;
  url: NavigationUrl;
}

const navigation: NavigationLink[] = [
  {
    label: "Home",
    url: "https://www.google.com" as NavigationUrl,
  },
  {
    label: "About",
    url: "https://www.google.com/about" as NavigationUrl,
  },
  {
    label: "Contact",
    url: "https://www.google.com/contact" as NavigationUrl,
  },
];
