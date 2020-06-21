import { RepoWithPulls } from "./interfaces";
const path = require("path");

export function countOpenPRs(
  pathToPullsFile: string = path.join(__dirname, "../../pulls.json")
) {
  const pullData = require(pathToPullsFile);
  let total = 0;

  const sorted: RepoWithPulls[] = pullData
    .sort((a, b) => (a.pulls.length > b.pulls.length ? 1 : -1))
    .filter(
      (pull, index, self) =>
        index === self.findIndex((thing) => thing.repo === pull.repo)
    )
    .map((pr) => (total += pr.pulls.length) && pr);

  console.log(
    sorted.map((s) => ({ repo: s.repo, pulls: s.pulls.map((p) => p.prTitle) })),
    `${total} total number of pull requests`
  );
}
