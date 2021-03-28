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
      phone
      email
      place {
        adress
        cedex
        city
      }
    }
  }
`;
export const CREATE_CLIENT = gql`
  mutation createClient(
    $lastname: String!
    $firstname: String!
    $type: String
    $civilite: String
    $birthdate: String
    $dependants: String
    $employees: String
    $job: String
    $retirementAge: String
    $phone: String
    $email: String
    $place: PlaceInput
  ) {
    createClient(
      lastname: $lastname
      firstname: $firstname
      type: $type
      civilite: $civilite
      birthdate: $birthdate
      dependants: $dependants
      employees: $employees
      job: $job
      retirementAge: $retirementAge
      phone: $phone
      email: $email
      place: $place
    )
  }
`;
export const CREATE_PLACE = gql`
  mutation createPlace($adress: String, $city: String, $cedex: String) {
    createPlace(adress: $adress, city: $city, cedex: $cedex)
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
