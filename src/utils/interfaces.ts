export interface RepoWithPulls {
  repo: string;
  pulls: PullRequestEssentials[];
}

export interface PullRequestEssentials {
  prTitle: string;
  age: string;
  openedBy: string;
  requestedReviewers: string[];
}
