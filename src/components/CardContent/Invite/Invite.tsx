import React from "react";
import scss from "./Invite.module.scss";

interface InviteProps {}

const Invite: React.FC<InviteProps> = () => {
  return (
    <div className={scss.invite}>
      <span className={scss.title}>Дорогой Гость!</span>
      <span className={scss.inviteText}>
        Мы рады сообщить Вам, что 22.07.2024 состоится самое главное торжество в
        нашей жизни - день нашей свадьбы! Приглашаем Вас разделить с нами
        радость этого незабываемого дня.
      </span>
      <div className={scss.img} />
    </div>
  );
};

export default Invite;
