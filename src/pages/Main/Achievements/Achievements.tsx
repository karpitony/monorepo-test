import React from 'react';
import AchievementItem from './AchievementItem';
import Slider from 'react-slick';
import * as S from './Achievements.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const achievementsData = [
  {
    id: 1,
    title: '2024 사회보장정보와 공공•민간 빅데이터 활용 국민행복서비스',
    description: '한국사회보장정보원 표창장',
    imageUrl: 'path/to/image1.jpg',
  },
  {
    id: 2,
    title: '2024 창업 아이디어 경진대회',
    description: '동국대학교 총장상(대상)',
    imageUrl: 'path/to/image2.jpg',
  },
  {
    id: 3,
    title: '2024 동국대학교 AI융합대학 해커톤',
    description: 'AI융합대학장상(대상)',
    imageUrl: 'path/to/image3.jpg',
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
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Achievements = () => {
  return (
    <S.AchievementsContainer>
      <S.Title>
        2024년 <S.Highlight>Farm System 3기</S.Highlight>에서 함께 성장하고 이루어낸 성과입니다.
      </S.Title>
      <S.SliderWrapper>
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
      <S.StatsContainer>
        <S.StatBox>
          <S.StatNumber>1,200명</S.StatNumber>
          <S.StatLabel>활동 멤버</S.StatLabel>
        </S.StatBox>
        <S.StatBox>
          <S.StatNumber>140개</S.StatNumber>
          <S.StatLabel>프로젝트</S.StatLabel>
        </S.StatBox>
        <S.StatBox>
          <S.StatNumber>80개</S.StatNumber>
          <S.StatLabel>스터디</S.StatLabel>
        </S.StatBox>
        <S.StatBox>
          <S.StatNumber>20회</S.StatNumber>
          <S.StatLabel>수상 경험</S.StatLabel>
        </S.StatBox>
      </S.StatsContainer>
    </S.AchievementsContainer>
  );
};

export default Achievements;
