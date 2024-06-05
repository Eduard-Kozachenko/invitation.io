import React from "react";
import scss from "./CardDefault.module.scss";

interface CardDefaultProps {}

const CardDefault: React.FC<CardDefaultProps> = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <div className={`${scss.lid} ${scss.one}`}></div>
        <div className={`${scss.lid} ${scss.two}`}></div>
        <div className={scss.envelope} onClick={() => console.log("click1")} />
        <div
          className={`${scss.letter}`}
          onClick={() => {
            console.log("click");
          }}
        >
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default CardDefault;
