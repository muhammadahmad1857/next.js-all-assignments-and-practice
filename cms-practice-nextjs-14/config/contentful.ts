const contentful = require("contentful");
export const client = contentful.createClient({
  space: "us6az65jrzwe",
  environment: "master", // default to 'master'
  accessToken: "89eZTvlLojKXw0SLRHXiUyIfbKItkH0CpS2-NZbeSDY",
});
