import React from "react";
import scss from "./CardContent.module.scss";
import Invite from "./Invite/Invite";
import Timer from "./Timer/Timer";
import Schedule from "./Schedule/Schedule";
import YandexMap from "./Map/YandexMap";

interface CardContentProps {}

const CardContent: React.FC<CardContentProps> = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.header}>
        <div className={scss.headerImg} />
        <div className={scss.title}>
          Эдуард
          <br /> &
          <br /> Наталья
        </div>
      </div>
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
