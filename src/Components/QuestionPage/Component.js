import React from 'react';
import styled from 'styled-components';

import AnswersList from '../AnswersList/Component';
import NewAnswer from '../NewAnswer/Container';



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const Title = styled.h1``;


const Description = styled.div`
  font-size: 12pt;
  margin: 10px;
  padding: 15px 0;
`;


const QuestionPage = ({ question }) => (
  <Wrapper>
    <Title>{question.title}</Title>

    <div>By: <strong>{question.author && question.author.fullName}</strong></div>

    <Description>{question.description}</Description>

    <AnswersList answers={question.answers} />

    <NewAnswer />
  </Wrapper>
);


export default QuestionPage;
