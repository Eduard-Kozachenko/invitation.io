import React, { useState, useEffect } from "react";
import scss from "./Timer.module.scss";

interface TimerProps {
  targetDate?: Date;
}

const tDate = new Date("2024-07-22T15:30:00");

const Timer: React.FC<TimerProps> = ({ targetDate = tDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number): JSX.Element => {
    const weeks = Math.floor(time / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(
      (time % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return (
      <div className={scss.timeContainer}>
        <div className={scss.timeBlock}>
          <span>{weeks}</span>
          <span>Недель</span>
        </div>
        <div className={scss.timeBlock}>
          <span>{days}</span>
          <span>Дней</span>
        </div>
        <div className={scss.timeBlock}>
          <span>{hours}</span>
          <span>Часов</span>
        </div>
        <div className={scss.timeBlock}>
          <span>{minutes}</span>
          <span>Минут</span>
        </div>
        <div className={scss.timeBlock}>
          <span>{seconds}</span>
          <span>Секунд</span>
        </div>
      </div>
    );
  };

  return (
    <div className={scss.timer}>
      <div className={scss.title}>Приглашаем на свадьбу</div>
      <div className={scss.day}>
        июль <span>22</span> понедельник
      </div>
      <React.Fragment>{formatTime(timeRemaining)}</React.Fragment>
    </div>
  );
};

export default Timer;
