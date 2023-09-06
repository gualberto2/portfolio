import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const post = `
shortDescriptionOfTheWebsite
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
    github
    liveSite
    subTitle
`;

const comment = `
id
name
email
comment`;

const category = `
    id,
    slug,
    title
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
        categories(){
            ${category}
        }
        teams(){
            ${team}
        }
    }
  }

`;

export const QUERY_ONE_POST = gql`
query GetOnePost($slug: String!) {
    posts(where: {slug: $slug}){
        ${post}
        comments(){
            ${comment}
        }

    }
}
`;
