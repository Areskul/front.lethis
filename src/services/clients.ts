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
export const GET_CLIENT = gql`
  query client($id: String, $lastname: String, $firstname: String) {
    client(id: $id, lastname: $lastname, firstname: $firstname) {
      id
      lastname
      firstname
      type
      gender
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
    $gender: String
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
      gender: $gender
      birthdate: $birthdate
      dependants: $dependants
      employees: $employees
      job: $job
      retirementAge: $retirementAge
      phone: $phone
      email: $email
      place: $place
    ) {
      id
      lastname
      firstname
      type
      gender
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
export const UPDATE_CLIENT = gql`
  mutation client(
    $id: String!
    $lastname: String
    $firstname: String
    $type: String
    $gender: String
    $birthdate: String
    $dependants: String
    $employees: String
    $job: String
    $retirementAge: String
    $phone: String
    $email: String
    $place: PlaceInput
  ) {
    updateClient(
      id: $id
      lastname: $lastname
      firstname: $firstname
      type: $type
      gender: $gender
      birthdate: $birthdate
      dependants: $dependants
      employees: $employees
      job: $job
      retirementAge: $retirementAge
      phone: $phone
      email: $email
      place: $place
    ) {
      id
      lastname
      firstname
      type
      gender
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
export const CREATE_INCOMES = gql`
  mutation createIncomes(
    $benefit: Number
    $employeeIncome: Number
    $jointIncome: Number
    $landIncome: Number
    $otherIncome: Number
    $share: Number
  ) {
    createClient(
      benefit: $benefit
      employeeIncome: $employeeIncome
      jointIncome: $jointIncome
      landIncome: $landIncome
      otherIncome: $otherIncome
      share: $share
    )
  }
`;
export const CREATE_CHARGES = gql`
  mutation createCharges(
    $name: String
    $value: Number
    $monthlyPayment: Number
    $propertyTax: Number
  ) {
    createClient(
      name: $name
      value: $value
      monthlyPayment: $monthlyPayment
      propertyTax: $propertyTax
    )
  }
`;
export const CREATE_ASSET = gql`
  mutation createAsset(
    $name: String
    $value: Number
    $monthlyPayment: Number
    $propertyTax: Number
  ) {
    createClient(
      name: $name
      value: $value
      monthlyPayment: $monthlyPayment
      propertyTax: $propertyTax
    )
  }
`;
export const UPDATE_ASSET = gql`
  mutation createAsset(
    $name: String
    $value: Number
    $monthlyPayment: Number
    $propertyTax: Number
  ) {
    createClient(
      name: $name
      value: $value
      monthlyPayment: $monthlyPayment
      propertyTax: $propertyTax
    )
  }
`;
export const CREATE_TAXES = gql`
  mutation createTaxes(
    $name: String
    $value: Number
    $monthlyPayment: Number
    $propertyTax: Number
  ) {
    createClient(
      name: $name
      value: $value
      monthlyPayment: $monthlyPayment
      propertyTax: $propertyTax
    )
  }
`;
export const CREATE_REALESTATE = gql`
  mutation createRealEstate(
    $name: String
    $value: Number
    $monthlyPayment: Number
    $propertyTax: Number
  ) {
    createClient(
      name: $name
      value: $value
      monthlyPayment: $monthlyPayment
      propertyTax: $propertyTax
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
