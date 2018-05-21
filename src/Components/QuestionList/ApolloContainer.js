import React from 'react';
import { compose, branch, renderComponent, mapProps, withStateHandlers, withProps } from 'recompose';
import { graphql } from 'react-apollo';

import AppLoader from '../Loaders/AppLoader';
import QuestionList from './Component';
import { questionsListQuery } from './gql'

export default compose(
  // HOC to handle query limit
  withStateHandlers(
    ({ limit = 2 }) => ({ limit }),
    {
      onIncreaseLimit: ({ limit }) => () => ({ limit: limit + 2 })
    },
  ),
  // HOC to fetch questions from gql-server
  graphql(questionsListQuery, {
    options: (props) => ({ // Pass limit variable to query
      variables: {
        limit: props.limit,
      },
    })
  }),
  // Show loading spinner on initial load
  branch(
    ({ data: { loading, networkStatus } }) =>
      loading && networkStatus === 1,
    renderComponent(AppLoader),
  ),
  mapProps(({ onIncreaseLimit, data: { questions } }) => ({
    onIncreaseLimit,
    questions
  }))
)(QuestionList);
