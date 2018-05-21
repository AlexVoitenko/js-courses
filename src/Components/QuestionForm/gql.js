import gql from "graphql-tag";

export const createQuestionQuery = gql`
  mutation CreateQuery($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      _id
      title
      description
      tags
      createdAt
    }
  }
`;
