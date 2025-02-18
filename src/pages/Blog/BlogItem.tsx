import React from 'react';
import styled from 'styled-components';

export interface BlogItemProps {
  title: string;
  description: string;
  imageUrl: string;
  blogUrl: string;
}

// 요긴 대충 짜서 해결
const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  margin: 0 0 12px;
  font-size: 1rem;
  color: #666;
`;

const ReadMore = styled.a`
  font-size: 0.9rem;
  color: #0077cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// 아이템들
const BlogItem: React.FC<BlogItemProps> = ({ title, description, imageUrl, blogUrl }) => {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReadMore href={blogUrl} target="_blank" rel="noopener noreferrer">
          읽으쇼잉
        </ReadMore>
      </Content>
    </Card>
  );
};

export default BlogItem;
