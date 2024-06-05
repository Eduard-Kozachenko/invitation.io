import React, { useState } from "react";
import {
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import scss from "./Card.module.scss";
import { guestList } from "../constants/guestList";
import CardContent from "./CardContent/CardContent";

const Card: React.FC = () => {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
    },
    to: {
      size: open ? "100%" : "50%",
      background: open ? "lightgray" : "white",
    },
  });

  const transApi = useSpringRef();
  // open ? guestList : []
  const transition = useTransition(open ? [{}] : [], {
    ref: transApi,
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [0, 0.1]);

  return (
    <div className={scss.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={scss.container}
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div style={{ ...style }}>
            <CardContent />
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Card;
