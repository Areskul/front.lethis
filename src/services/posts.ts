import gql from "graphql-tag";

export const GET_POSTS = gql`
  query posts {
    posts {
      id
      content
      user {
        name
      }
    }
  }
`;
export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content)
  }
`;
export const NEW_POSTS = gql`
  subscription newPost {
    newPost {
      id
      content
      user {
        name
      }
    }
  }
`;
export const LIKE_POST = gql`
  mutation likePost($id: number) {
    likePost(id: $id)
  }
`;
