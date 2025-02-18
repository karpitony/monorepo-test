import React from 'react';
import styled from 'styled-components';
import ProjectItem, { ProjectItemProps } from './ProjectItem';

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

// 더미미
const projectData: ProjectItemProps[] = [
  {
    title: '임시직 프로젝트 1',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 1.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: '#',
  },
  {
    title: '임시직 프로젝트 2',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 2.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: '#',
  },
  {
    title: '임시직 프로젝트 3',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 3.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: '#',
  },
];

const ProjectList: React.FC = () => {
  return (
    <ListContainer>
      {projectData.map((item, index) => (
        <ProjectItem key={index} {...item} />
      ))}
    </ListContainer>
  );
};

export default ProjectList;
