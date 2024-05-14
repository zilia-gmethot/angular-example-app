import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// const { data: workflows } = await octokit.rest.actions.listRepoWorkflows({
//   owner: "zilia-gmethot",
//   repo: "angular-example-app"
// });

// const { data: pullRequest } = await octokit.rest.pulls.get({
//   owner: "zilia-gmethot",
//   repo: "angular-example-app",
//   pull_number: 2
// });

// console.log(pullRequest);

// const { data: workflowRuns } = await octokit.rest.actions.listWorkflowRuns({
//   owner: "zilia-gmethot",
//   repo: "angular-example-app",
//   workflow_id: workflows.workflows[0].id
// })

// console.log(workflowRuns);

// const { data: checkRuns } = await octokit.rest.checks.listForRef({
//   owner: "zilia-gmethot",
//   repo: "angular-example-app",
//   ref: "test"
// });

// const latestCheckRun = checkRuns.check_runs[0];

// console.log(checkRuns);

// const resp = await octokit.rest.checks.rerequestRun({
//   owner: "zilia-gmethot",
//   repo: "angular-example-app",
//   check_run_id: latestCheckRun.id
// });

// console.log(resp);

// const resp = await octokit.rest.checks.create({
//   owner: "zilia-gmethot",
//   repo: "angular-example-app",
//   name: "Playwright Tests",
//   head_sha: "fe69090ec04347c3995c365796ef03b2e605f2e3"
// });

// console.log(resp);

const { data: checkSuites } = await octokit.rest.checks.listSuitesForRef({
  owner: "zilia-gmethot",
  repo: "angular-example-app",
  ref: "test"
});

console.log(checkSuites);

// console.log({ id: checkSuites.check_suites[0].id })

const resp = await octokit.rest.checks.rerequestSuite({
  owner: "zilia-gmethot",
  repo: "angular-example-app",
  check_suite_id: checkSuites.check_suites[0].id
});

console.log(resp);
