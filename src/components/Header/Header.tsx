import React from "react";
import scss from "./Header.module.scss";
import headerImg from "../../assets/img/letter-header.png";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={scss.header}>
      <div className={scss.imgContainer}>
        <img src={headerImg} alt="" />
      </div>
      <div className={scss.title}>
        Эдуард
        <div className={scss.and}>&</div>
        Наталья
      </div>
    </div>
  );
};

export default Header;
