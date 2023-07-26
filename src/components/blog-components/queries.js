import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const post = `
featuredImage {
  url
}
content {
  html
}
title
slug
id
createdAt
updatedAt
excerpt
`;
const category = `
id
title
slug`;
const comment = `
id
name
email
comment`;
