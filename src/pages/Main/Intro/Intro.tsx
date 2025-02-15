import * as S from './Intro.styled';
import logo from '../../../assets/Icons/FarmLogo1.png';
import { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import useMediaQueries from '@/hooks/useMediaQueries';
import IntroLogo from '../../../assets/Icons/IntroLogo.svg';
import { motion } from 'framer-motion';

const Intro = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isTiny, isApp, isMobile, isTablet, isIpadPro } = useMediaQueries();

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
      <S.AppContainer>
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
        </S.TopSection>

        {/* 2/3 지점: Description - 화면에 들어올 때 애니메이션 적용 */}
        <S.BottomSection>
          {[
            "Farm System은 SW/AI 분야에 관심있는",
            "학생들로 구성된 자율 학습 동아리로,",
            "Union · 게임/영상 · 보안/웹 ·",
            "사물인터넷/로봇 · 인공지능 · 빅데이터의",
            "5가지 신기술 트랙을 제공하여",
            "학습 경험을 통해 SW/AI 역량을 배양합니다."
          ].map((text, index) => (
            <S.IntroDescription
              as={motion.p}
              key={index}
              initial={{ color: "#333", clipPath: "inset(0 100% 0 0)" }} 
              whileInView={{ color: "#ffffff", clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, delay: index * 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {text}
            </S.IntroDescription>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease: "easeOut" }} // description 마지막보다 살짝 더 늦게 실행
            viewport={{ once: true }} // 한 번만 실행
          >
            <S.AppApplyButton onClick={() => setPopupOpen(true)}>
              지원하기
            </S.AppApplyButton>
          </motion.div>
        </S.BottomSection>
        

        <Popup 
          isOpen={isPopupOpen} 
          onClose={() => setPopupOpen(false)} 
          title={"앱에서 더 많은 기능을 제공합니다."} 
          content={"추가적인 정보는 2025년 2월 공개 예정입니다."} 
        />
      </S.AppContainer>
    );
  }

  return (
    <S.Container id="about" $isApp={isApp} $isMobile={isMobile} $isTablet={isTablet} $isIpadPro={isIpadPro}>
      <S.Bud $isMobile={isMobile} $isTablet={isTablet}>🌱</S.Bud>
      <S.Description $isMobile={isMobile} $isTablet={isTablet}>
        미래를 준비하고 성장하는 여정, <br />
        Farm System에서 함께하세요.
      </S.Description>
      <S.Logo $isMobile={isMobile} $isTablet={isTablet}>
        <img src={logo} alt="" />
        Farm System
      </S.Logo>
      
      <S.TrackList $isTiny={isTiny} $isMobile={isMobile} $isTablet={isTablet}>
        SW/AI 분야에 관심있는 학생들로 구성된 <a>자율 학습 동아리</a>로, <br />
        <a>Union · 게임/영상 · 보안/웹 · 사물인터넷/로봇 · 인공지능 · 빅데이터</a>의 <br />
        5가지 신기술 트랙을 제공하여 학습 경험을 통해 SW/AI 역량을 배양합니다.
      </S.TrackList>
      
      <S.Apply>
        <S.ApplyButton $isMobile={isMobile} $isTablet={isTablet} onClick={() => setPopupOpen(true)}> 지원하기 </S.ApplyButton>
        <S.ApplyDescription>2025년 2월 공개 모집 예정</S.ApplyDescription>
      </S.Apply>
      
      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"지금은 모집 기간이 아닙니다."} 
        content={"공개 모집 예정: 2025년 2월"} 
      />
    </S.Container>
  );
};

export default Intro;
