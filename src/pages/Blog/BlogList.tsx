import React from 'react';
import styled from 'styled-components';
import BlogItem, { BlogItemProps } from './BlogItem';

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

// 더미
const blogData: BlogItemProps[] = [
  {
    title: '임시직 1',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 1.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: '#',
  },
  {
    title: '임시직 2',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 2.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: '#',
  },
  {
    title: '임시직 3',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 3.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: '#',
  },
];

const BlogList: React.FC = () => {
  return (
    <ListContainer>
      {blogData.map((item, index) => (
        <BlogItem key={index} {...item} />
      ))}
    </ListContainer>
  );
};

export default BlogList;
