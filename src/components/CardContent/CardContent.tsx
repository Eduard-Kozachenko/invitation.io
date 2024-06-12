import React from "react";
import scss from "./CardContent.module.scss";
import Header from "../Header/Header";
import Invite from "../Invite/Invite";
import Timer from "../Timer/Timer";
import Schedule from "../Schedule/Schedule";
import YandexMap from "../Map/YandexMap";

interface CardContentProps {}

const CardContent: React.FC<CardContentProps> = () => {
  return (
    <div className={scss.wrapper}>
      <Header />
      <Invite />
      <Timer />
      <Schedule />
      <YandexMap />
      <span className={scss.endText}>Ждем Вас</span>
      <span className={scss.endText}>Ваши Жених и Невеста</span>
    </div>
  );
};

export default CardContent;
