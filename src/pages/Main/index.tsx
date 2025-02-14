import Intro from "./Intro/Intro";
import Tracks from "./Tracks/Tracks";
import Union from "./Union/Union";
import Achievements from "./Achievements/Achievements";
import BottomInfo from "./BottomInfo/BottomInfo";
import FarmSystemNav from "./FarmSyetemNav/FarmSystemNav";
import * as S from "./index.styled"; 

export default function Main() {
  return (
    <S.MainContainer> {/* 배경 그라데이션 적용 */}
      <FarmSystemNav />
      <Intro />
      <Tracks />
      <Union />
      <Achievements />
      <BottomInfo />
    </S.MainContainer>
  );
}
