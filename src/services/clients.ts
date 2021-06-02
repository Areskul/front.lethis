import gql from "graphql-tag";

export const GET_CLIENTS = gql`
  query clients {
    clients {
      id
      lastname
      firstname
      gender
    }
  }
`;
export const DELETE_CLIENT = gql`
  mutation deleteClient($id: String!) {
    deleteClient(id: $id) {
      id
      lastname
      firstname
    }
  }
`;
export const GET_CLIENT = gql`
  query client($id: String!) {
    client(id: $id) {
      id
      lastname
      firstname
      retirementAge
      phone
      email
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
      incomes {
        id
        benefits
        wage
        landed
        others
        joint
        qp
        total
        result
      }
      taxes {
        id
        income
        wage
        housing
      }
      charges {
        id
        rent
        food
        energy
        isp
        school
        insurance
        help
        transports
        recreation
        holidays
        consumer
        others
        coownership
        total
        qp
        result
      }
      taxes {
        id
        income
        wage
        housing
      }
      place {
        adress
        cedex
        city
      }
    }
  }
`;
export const UPDATE_CLIENT = gql`
  mutation updateClient(
    $client: ClientInput!
    $job: JobInput
    $place: PlaceInput
    $incomes: IncomesInput
    $charges: ChargesInput
    $taxes: TaxesInput
  ) {
    updateClient(
      client: $client
      job: $job
      place: $place
      incomes: $incomes
      charges: $charges
      taxes: $taxes
    ) {
      id
      lastname
      firstname
      retirementAge
      phone
      email
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
      incomes {
        id
        benefits
        wage
        landed
        others
        joint
        qp
        total
        result
      }
      charges {
        id
        rent
        food
        energy
        isp
        school
        insurance
        help
        transports
        recreation
        holidays
        consumer
        others
        coownership
        total
        qp
        result
      }
      taxes {
        id
        income
        wage
        housing
      }
      place {
        adress
        cedex
        city
      }
    }
  }
`;
