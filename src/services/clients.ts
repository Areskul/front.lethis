import gql from "graphql-tag";

export const GET_CLIENTS = gql`
  query clients {
    clients {
      id
      lastname
      firstname
      gender
      type
      birthdate
      dependants
      employees
      retirementAge
      phone
      email
    }
  }
`;
export const GET_CLIENT = gql`
  query client($id: String!) {
    client(id: $id) {
      id
      lastname
      firstname
      type
      gender
      birthdate
      dependants
      employees
      job {
        name
      }
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
export const UPDATE_CLIENT = gql`
  mutation updateClient($client: ClientInput!) {
    updateClient(client: $client) {
      id
      lastname
      firstname
      type
      gender
      birthdate
      dependants
      retirementAge
      phone
      email
    }
  }
`;
