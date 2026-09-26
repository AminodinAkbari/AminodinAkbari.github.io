export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "raztodo",
    contibutionDescription:
      "Added unit tests for the FastAPI explain route, covering previously untested code paths and completing the issue for full route coverage.",
    repoOwner: "razdev",
    link: "https://github.com/razbuild/raztodo/pull/41",
  },
  {
    repo: "bitbox",
    contibutionDescription:
      "Implemented the `int_to_roman` tool to convert integers to Roman numeral strings.",
    repoOwner: "abduznik",
    link: "https://github.com/abduznik/bitbox/pull/124",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
