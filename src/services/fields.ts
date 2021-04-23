import gql from "graphql-tag";

export const GET_GENDERS = gql`
  query genders {
    __type(name: "Gender") {
      enumValues {
        name
      }
    }
  }
`;
