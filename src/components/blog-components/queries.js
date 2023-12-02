import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const post = `
shortDescriptionOfTheWebsite
    featuredImage {
      url
    }
    content {
      raw
    }

    title
    slug
    id
    createdAt
    updatedAt
    excerpt
    github
    liveSite
    subTitle
`;

const team = `
id
authorImg {
  url
}
authorName
authorSite
`;

export const QUERY_POSTS = gql`
{
    posts(){
        ${post}
        teams(){
            ${team}
        }
    }
  }

`;

export const QUERY_SELECTED_POST = gql`
query GetOnePost($slug: String!) {
    posts(where: {slug: $slug}){
        ${post}
    }
}
`;
