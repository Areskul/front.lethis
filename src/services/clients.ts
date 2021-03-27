import gql from "graphql-tag";

export const GET_CLIENTS = gql`
  query clients {
    clients {
      id
      lastname
      firstname
      type
      civilite
      birthdate
      dependants
      employees
      job
      retirementAge
      adress
      cedex
      city
      phone
      email
    }
  }
`;
export const CREATE_CLIENT = gql`
  mutation createClient(
      $lastname
      $firstname
      $type
      $civilite
      $birthdate
      $dependants
      $employees
      $job
      $retirementAge
      $adress
      $cedex
      $city
      $phone
      $email
) {
    createPost(
      lastname: $lastname
      firstname: $firstname
      type: $type
      civilite: $civilite
      birthdate: $birthdate
      dependants: $dependants
      employees: $employees
      job: $job
      retirementAge: $retirementAge
      adress: $adress
      cedex: $cedex
      city: $city
      phone: $phone
      email: $email
)
  }
`;
export const NEW_CLIENT = gql`
  subscription newClient {
    newClient {
      id
      lastname
    }
  }
`;
