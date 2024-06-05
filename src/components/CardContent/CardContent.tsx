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
      <div>
        <div
          // src="../../assets/img/27946.jpg"
          style={{
            background:
              'url("../../assets/img/27946.jpg") center/cover no-repeat',
            width: "100%",
            height: 300,
          }}
        />
      </div>
      <div className={scss.title}>Эдуард & Наталья</div>
      <Invite />
      <Timer />
      <Schedule />
      <YandexMap />
    </div>
  );
};

export default CardContent;
