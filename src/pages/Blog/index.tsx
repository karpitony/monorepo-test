import React, { useState } from 'react';
import styled from 'styled-components';
import BlogList from './BlogList';
import ProjectList from './ProjectList';

// 버튼 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// 토글 버튼 스타일
const ToggleButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-bottom: ${(props) => (props.active ? '2px solid #0077cc' : 'none')};
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => (props.active ? '#0077cc' : '#333')};

  &:hover {
    color: #0077cc;
  }
`;

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'project'>('blog');

  return (
    <>
      <ButtonContainer>
        <ToggleButton active={activeTab === 'blog'} onClick={() => setActiveTab('blog')}>
          Blog
        </ToggleButton>
        <ToggleButton active={activeTab === 'project'} onClick={() => setActiveTab('project')}>
          Project
        </ToggleButton>
      </ButtonContainer>

      {activeTab === 'blog' && (
        <div>
          <h2>Blog</h2>
          <BlogList />
        </div>
      )}

      {activeTab === 'project' && (
        <div>
          <h2>Project</h2>
          <ProjectList />
        </div>
      )}
    </>
  );
};

export default Blog;
