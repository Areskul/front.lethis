import gql from "graphql-tag";

//export const LOGIN_USER = gql`
//query($name: String, $email: String, $password: String!) {
//loginUser(name: $name, email: $email, password: $password) {
//... on User {
//id
//name
//email
//}
//... on Token {
//value
//}
//}
//}
//`;
export const LOGIN_USER = gql`
  query($email: String, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;
export const REGISTER_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    registerUser(name: $name, email: $email, password: $password)
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
export const FORGOT_PASSWD = gql`
  mutation($name: String, $email: String) {
    getResetPasswordToken(name: $name, email: $email)
  }
`;
export const RESET_PASSWD = gql`
  mutation($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`;
