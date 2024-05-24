const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CONTENFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
