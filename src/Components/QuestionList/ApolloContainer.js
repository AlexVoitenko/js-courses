import React from 'react';
import gql from 'graphql-tag';
import { compose, branch, renderComponent, mapProps } from 'recompose';
import { graphql } from 'react-apollo';

import AppLoader from '../Loaders/AppLoader';
import QuestionList from './Component';

const query = gql`
  query QuestionList {
    questions {
      _id
      title
      tags
      createdAt
      author {
        fullName
      }
    }
  }
`;

export default compose(
  graphql(query),
  branch(
    ({ data: { loading } }) => loading,
    renderComponent(AppLoader),
  ),
  mapProps(({ data: { questions } }) => ({ questions }))
)(QuestionList)
