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

export const QUERY_POSTS = gql`
{
    posts(){
        ${post}
        categories(){
            ${category}
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
