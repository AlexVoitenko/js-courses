import gql from "graphql-tag";

export const questionDetailQuery = gql`
  query QuestionDetail($_id: ID!) {
    question(_id: $_id) {
      _id
      title
      tags
      description
      createdAt
      author {
        _id
        fullName
      }
      answers {
        _id
        title
        description
        createdAt
        author {
          _id
          fullName
        }
      }
    }
  }
`;
