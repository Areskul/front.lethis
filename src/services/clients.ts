import gql from "graphql-tag";

export const GET_CLIENTS = gql`
  query clients {
    clients {
      id
      lastname
      firstname
      gender
      type
      family
      birthdate
      dependants
      employees
      job {
        id
        name
      }
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
      family
      gender
      birthdate
      dependants
      employees
      job {
        id
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
  mutation updateClient($client: ClientInput!, $job: JobInput) {
    updateClient(client: $client, job: $job) {
      id
      lastname
      firstname
      type
      gender
      birthdate
      dependants
      family
      employees
      job {
        id
        name
      }
      retirementAge
      phone
      email
    }
  }
`;
