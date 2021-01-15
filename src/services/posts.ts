import gql from "graphql-tag";

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content)
  }
`;
export const GET_POSTS = gql`
  subscription newPost {
    newPost {
      content
      user {
        name
      }
    }
  }
`;
