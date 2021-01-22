import gql from "graphql-tag";

export const LOGIN_USER = gql`
  query loginUser($name: String, $email: String, $password: String!) {
    loginUser(name: $name, email: $email, password: $password)
  }
`;
export const REGISTER_USER = gql`
  mutation registerUser($name: String!, $email: String!, $password: String!) {
    registerUser(name: $name, email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;
export const USER_INFO = gql`
  query getUserInfo {
    user {
      id
      name
      email
    }
  }
`;
