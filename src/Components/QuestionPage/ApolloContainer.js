import React from 'react';
import { graphql } from 'react-apollo';
import {branch, compose, mapProps, renderComponent } from 'recompose';

import QuestionPage from './Component';
import AppLoader from "../Loaders/AppLoader";
import { questionDetailQuery } from './gql';


export default compose(
  graphql(questionDetailQuery, {
    options: (props => ({
      variables: {
        _id: props.match.params.questionId
      },
    }))
  }),
  branch(
    ({ data: { loading, networkStatus } }) =>
      loading && networkStatus === 1,
    renderComponent(AppLoader),
  ),
  mapProps(({ data: { question } }) => ({ question })),
)(QuestionPage);
