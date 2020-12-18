import gql from "graphql-tag";

export const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
export const REGISTER_USER = gql`
  mutation registerUser($name: String!, $email: String!, $password: String!) {
    registerUser(name: $name, email: $email, password: $password)
  }
`;
export const USER_INFO = gql`
  query userInfo {
    users {
      name
      email
    }
  }
`;
