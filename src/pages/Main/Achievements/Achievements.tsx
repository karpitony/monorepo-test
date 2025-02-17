import AchievementItem from './AchievementItem';
import AchievementBox from './AchievementBox';
import Slider from 'react-slick';
import * as S from './Achievements.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useMediaQueries from '@/hooks/useMediaQueries';

const achievementsData = [
  {
    id: 1,
    title: '2024 사회보장정보와 공공•민간 빅데이터 활용 국민행복서비스',
    description: '한국사회보장정보원 표창장',
    imageUrl: 'https://farmsystem-bucket.s3.ap-northeast-2.amazonaws.com/award/award_2.png',
  },
  {
    id: 2,
    title: '2024 창업 아이디어 경진대회',
    description: '동국대학교 총장상(대상)',
    imageUrl: 'https://farmsystem-bucket.s3.ap-northeast-2.amazonaws.com/award/award_3.png',
  },
  {
    id: 3,
    title: '2024 동국대학교 AI융합대학 해커톤',
    description: 'AI융합대학장상(대상)',
    imageUrl: 'https://farmsystem-bucket.s3.ap-northeast-2.amazonaws.com/award/award_4.png',
  },
  {
    id: 4,
    title: '2024 DPG AI Challenge',
    description: '디지털플랫폼정부위원장상(최우수상)',
    imageUrl: 'https://farmsystem-bucket.s3.ap-northeast-2.amazonaws.com/award/award_1.png',
  },
  {
    id: 5,
    title: '22024 E2GEE Lab(이지랩) 메이커톤',
    description: '동국대학교 총장상(대상)',
    imageUrl: 'https://farmsystem-bucket.s3.ap-northeast-2.amazonaws.com/award/award_5.png',
  },
];

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,  
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 820, 
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};


const Achievements = () => {
  const { isApp, isMobile, isTablet } = useMediaQueries();
  return (
    <S.AchievementsContainer id="achievements" $isMobile={isMobile} $isTablet={isTablet}>
      <S.TitleArea $isMobile={isMobile}>
        {isApp ? (
          <S.Title $isApp={isApp} $isMobile={isMobile} $isTablet={isTablet}>
            2024년 <S.Highlight>Farm System 3기</S.Highlight>에서 <br/> 함께 성장하고 이루어낸 성과입니다.
          </S.Title>
        ) : (
          <S.Title $isApp={isApp} $isMobile={isMobile} $isTablet={isTablet}>
            2024년 <S.Highlight>Farm System 3기</S.Highlight>에서 함께 성장하고 이루어낸 성과입니다.
          </S.Title>
        )}
      </S.TitleArea>
      
      <S.SliderWrapper $isMobile={isMobile} $isTablet={isTablet}>
        <Slider {...settings}>
          {achievementsData.map((achievement) => (
            <AchievementItem
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              imageUrl={achievement.imageUrl}
            />
          ))}
        </Slider>
      </S.SliderWrapper>
        
      <AchievementBox />
    </S.AchievementsContainer>
  );
};

export default Achievements;
