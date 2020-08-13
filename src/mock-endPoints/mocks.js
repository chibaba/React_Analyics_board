const axios = require("axios");

const MockAdapter = require("axios-mock-adapter");

// this set the mock adapter to the default instance

const mock = new MockAdapter(axios);

//data endpoints
mock
  .onGet("/api/data/repo_hierarchy")
  .reply(200, require("./fixtures/repo_hierarchy.json"));
mock
  .onGet("/api/data/amount_of_repos")
  .reply(200, require("./fixtures/open_source_vs_repos.json"));
mock
  .onGet("/api/data/device_percentage")
  .reply(200, require("./fixtures/device_percentage.json"));

//configuration endpoints
mock.onGet("api/dashboard-list").reply(200, [
  {
    path: "repo_dash_config",
    title: "Org Repository Insights",
    description:
      "The org repository insights dashboard contains data about the organization's current branch hierarchy, and a radial line graph comparing tottal devices to enterprise managed device that contain codebase from the organization.",
  },
]);
