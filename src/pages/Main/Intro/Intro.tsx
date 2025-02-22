import * as S from './Intro.styled';
import logo from '../../../assets/Icons/FarmLogo1.png';
import { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import useMediaQueries from '@/hooks/useMediaQueries';
import { motion } from 'framer-motion';
import IntroLogo from '../../../assets/Icons/IntroLogo.svg';

const Intro = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isApp, isMobile, isTablet } = useMediaQueries();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
    }),
  };

  if (isApp) {
    return (
      <>
        <S.AppContainer id="about">
          <S.TopSection>
            <motion.img 
              src={IntroLogo} 
              alt="" 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0} 
            />

            {["미래를 준비하고 성장하는 여정,", "Farm System에서 함께하세요."].map((text, index) => (
              <S.IntroPhrase 
                as={motion.div}
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index + 2} 
              >
                {text}
              </S.IntroPhrase>
            ))}
             <S.AppApplyButton onClick={() => setPopupOpen(true)}>
                지원하기
              </S.AppApplyButton>
          </S.TopSection>
        </S.AppContainer>

        <S.AppContainer>
          <S.BottomSection>
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
                <S.SectionTitle>
                야구에서 유망주를 체계적으로<br /> 성장시키는 팜(Farm) 시스템처럼,<br />
                동국대학교 Farm System🌱은<br />SW/AI 역량을 기르고 실력을 갈고 닦을 수 있는 최적의 환경을 제공합니다.
                </S.SectionTitle>
  </motion.div>

  <S.ContentWrapper>
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <S.InfoCard>
        <S.Highlight>Overview</S.Highlight>
        <S.DescriptionText>
          Farm System은 최신 기술을 깊이 있게 탐구하는 <S.greenHighlight>5가지 신기술 트랙</S.greenHighlight>과 
          SW/AI의 탄탄한 기초를 다지는 <S.greenHighlight>Union</S.greenHighlight>으로<br/>구성됩니다.
        </S.DescriptionText>
      </S.InfoCard>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <S.InfoCard>
                  <S.Highlight> Track</S.Highlight>
                  <S.DescriptionText><S.greenHighlight>게임/영상 · 보안/웹 · 사물인터넷/로봇 · 인공지능 · 빅데이터</S.greenHighlight>의<br/> 5가지 신기술 트랙에서는
각 분야의 최첨단 기술을 학습하고,<br/> 이를 프로젝트에 적용하며 <S.greenHighlight>실전 경험</S.greenHighlight>을 쌓을 수 있습니다.</S.DescriptionText>
      </S.InfoCard>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, delay: 0.7 }}
      viewport={{ once: true }}
    >
      <S.InfoCard>
        <S.Highlight>Union</S.Highlight>
                  <S.DescriptionText>
                    <S.greenHighlight>Union</S.greenHighlight>에서는
SW/AI의 핵심 개념을 익히고, <S.greenHighlight>탄탄한 기초를 바탕</S.greenHighlight>으로 성장할 수 있도록 돕습니다.        </S.DescriptionText>
      </S.InfoCard>
    </motion.div>
  </S.ContentWrapper>

  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }} 
    whileInView={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.6, delay: 1 }}
    viewport={{ once: true }}
  >
    <S.FarmSystemDescription>
      Farm System은 <br/>동국대학교 SW 교육원과 함께하며, <br/>  
      미래의 SW/AI 리더를 양성하는 배경이자  <br/>발판이 됩니다.
    </S.FarmSystemDescription>
  </motion.div>
</S.BottomSection>

          <Popup 
            isOpen={isPopupOpen} 
            onClose={() => setPopupOpen(false)} 
            title={"지금은 모집 기간이 아닙니다."} 
            content={"공개 모집 예정: 2025년 2월"} 
          />
        </S.AppContainer>
      </>
    );
  }

  return (
    <S.Container id="about" $isMobile={isMobile} $isTablet={isTablet}>
      <S.Bud $isMobile={isMobile} $isTablet={isTablet}>🌱</S.Bud>
      <S.Description $isMobile={isMobile} $isTablet={isTablet}>
        미래를 준비하고 성장하는 여정, <br />
        Farm System에서 함께하세요.
      </S.Description>
      <S.Logo $isMobile={isMobile} $isTablet={isTablet}>
        <img src={logo} alt="" />
        Farm System
      </S.Logo>

      <S.TrackList $isMobile={isMobile} $isTablet={isTablet}>
        SW/AI 분야에 관심있는 학생들로 구성된 <a>자율 학습 동아리</a>로, <br/>
        <a>Union · 게임/영상 · 보안/웹 · 사물인터넷/로봇 · 인공지능 · 빅데이터</a>의 <br/>
        5가지 신기술 트랙을 제공하여 학습 경험을 통해 SW/AI 역량을 배양합니다.
      </S.TrackList>
      <S.Apply>
        <S.ApplyButton $isMobile={isMobile} $isTablet={isTablet} onClick={() => setPopupOpen(true)}> 지원하기 </S.ApplyButton>
        <S.ApplyDescription $isMobile={isMobile}>2025년 2월 공개 모집 예정</S.ApplyDescription>
      </S.Apply>

      {isPopupOpen && (
        <Popup 
          isOpen={isPopupOpen} 
          onClose={() => setPopupOpen(false)} 
          title={"지금은 모집 기간이 아닙니다."} 
          content={"공개 모집 예정: 2025년 2월"} 
        />
      )}
    </S.Container>
  );
};

export default Intro;
