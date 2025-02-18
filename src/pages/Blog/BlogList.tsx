import * as S from './BlogList.styles';
import BlogItem, { BlogItemProps } from './BlogItem';

/** 샘플용 더미 데이터 */
const projectData: BlogItemProps[] = [
  {
    title: '임시직 프로젝트 1',
    description: '팜시스템에 필요한 모든 정보를 담은 앱! W-300 H-40 고정사이즈로써 2줄까지 소개가 가능하다.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 2',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 2.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 3',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 3.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 1',
    description: '팜시스템에 필요한 모든 정보를 담은 앱! W-300 H-40 고정사이즈로써 2줄까지 소개가 가능하다.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 2',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 2.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 3',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 3.',
    imageUrl: 'https://via.placeholder.com/300',
    blogUrl: 'https://www.naver.com',
  },
];

const BlogList: React.FC = () => {
  return (
    <S.Container>
      <S.TableContainer>
        <S.SubDescription> * 블로그 클릭 시 외부로 연결됩니다.</S.SubDescription>
      </S.TableContainer>

      {/* 프로젝트 카드 리스트 */}
      <S.ListContainer>
        {projectData.map((item, index) => (
          <BlogItem key={index} {...item} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default BlogList;
