import React, { useState } from 'react';
import * as S from './index.styles';

import BlogList from './BlogList';
import ProjectList from './ProjectList';

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'project'>('project');

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.ToggleButton active={activeTab === 'project'} onClick={() => setActiveTab('project')}>
          <div>프로젝트</div>
        </S.ToggleButton>
        <S.Divider>|</S.Divider>
        <S.ToggleButton active={activeTab === 'blog'} onClick={() => setActiveTab('blog')}>
          <div>블로그</div>
        </S.ToggleButton>
      </S.ButtonContainer>
        {activeTab === 'project' && (
          <S.ActiveTabIndicator>
            <h2>Project</h2>
            <ProjectList />
          </S.ActiveTabIndicator>
        )}
        {activeTab === 'blog' && (
          <S.ActiveTabIndicator>
            <h2>Blog</h2>
            <BlogList />
          </S.ActiveTabIndicator>
        )}
      


    </S.Container>
  );
};

export default Blog;
