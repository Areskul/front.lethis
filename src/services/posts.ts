import gql from "graphql-tag";

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content)
  }
`;
