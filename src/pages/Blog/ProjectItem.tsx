import React from 'react';
import styled from 'styled-components';

export interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  blogUrl: string; // 링크 연동 시 다른 URL / 속성 추가? 어떻게 할까난
}

// 스타일 컴포넌트 (블로그랑 같지만, 다를 수 있으니께)
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

const LearnMore = styled.a`
  font-size: 0.9rem;
  color: #0077cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, imageUrl, blogUrl }) => {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LearnMore href={blogUrl} target="_blank" rel="noopener noreferrer">
          Learn More
        </LearnMore>
      </Content>
    </Card>
  );
};

export default ProjectItem;
