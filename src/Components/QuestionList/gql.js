import gql from "graphql-tag";

export const questionsListQuery = gql`
  query QuestionList($limit: Int = 10) {
    questions(limit: $limit) {
      _id
      title
      description
      tags
      createdAt
      author {
        fullName
      }
    }
  }
`;
