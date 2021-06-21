import gql from "graphql-tag";

export const GET_ENUM = gql`
  query enum($name: String!) {
    __type(name: $name) {
      enumValues {
        name
      }
    }
  }
`;

export const GET_JOBS = gql`
  query jobs {
    jobs {
      name
    }
  }
`;

export const ADD_JOB = gql`
  mutation add($job: JobInput!) {
    createJob(job: $job)
  }
`;
