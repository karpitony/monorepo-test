import Header from "@/components";
import Intro from "./Intro/Intro";
import Tracks from "./Tracks/Tracks";
import Union from "./Union/Union";
import Achievements from "./Achievements/Achievements";
import BottomInfo from "./BottomInfo/BottomInfo";

export default function Main() {
  return (
    <div>
      <Header />
      <Intro />
      <Tracks />
      <Union />
      <Achievements />
      <BottomInfo />
    </div>
  );
}