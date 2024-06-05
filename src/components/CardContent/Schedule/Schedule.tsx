import React from "react";
import scss from "./Schedule.module.scss";
import { scheduleList } from "../../../constants/scheduleList";

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.title}>Свадебное расписание</div>
      <div className={scss.list}>
        {scheduleList.map((schedule) => (
          <div className={scss.block} key={schedule.id}>
            <div className={scss.time}>{schedule.time}</div>
            <div className={scss.infoBlock}>
              <div className={scss.infoTitle}>{schedule.title}</div>
              <span>{schedule.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
