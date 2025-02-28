import React from 'react';
import { Container, Message } from './News.styles';

const News: React.FC = () => {
  return (
    <Container>
      <Message>아직 등록된 소식이 없어요.</Message>
    </Container>
  );
};

export default News;