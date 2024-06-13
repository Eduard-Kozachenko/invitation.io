import React from "react";
import scss from "./Invite.module.scss";
import letterImg from "../../assets/img/letter.jpg";
import Typewriter from "../Typewriter/Typewriter";
import TypewriterDelay from "../Typewriter/TypewriterDelay";

const inviteTitle = "Дорогой Гость!";
const inviteText =
  "Мы рады сообщить Вам, что 22.07.2024 состоится самое главное торжество в нашей жизни - день нашей свадьбы! Приглашаем Вас разделить с нами радость этого незабываемого дня.";

interface InviteProps {}

const Invite: React.FC<InviteProps> = () => {
  return (
    <div className={scss.invite}>
      <Typewriter text={inviteTitle} delay={100} className={scss.title} />
      <TypewriterDelay
        text={inviteText}
        delay={100}
        startDelay={2000}
        className={scss.inviteText}
      />
      <div className={scss.imgWrapper}>
        <div className={scss.imgContainer}>
          <img src={letterImg} alt="letter" />
        </div>
      </div>
    </div>
  );
};

export default Invite;
