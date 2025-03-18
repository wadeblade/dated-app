import React, { useState, useEffect } from "react";
import avatar1 from "../../public/me.jpg";
import avatar2 from "../../public/mylove.jpg";

interface TimeData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Main: React.FC = () => {
  // Визначена дата: 13 березня 2025, 17:05 (UTC+02:00)
  const startDate = new Date("2025-03-18T01:03:00+02:00");

  const [timeData, setTimeData] = useState<TimeData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff < 0) {
        setTimeData({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const totalSeconds = Math.floor(diff / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;
        const days = Math.floor(totalHours / 24);

        setTimeData({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer-container">
      <div className="avatars">
        <img src={avatar1} alt="Avatar 1" className="avatar" />
        <img src={avatar2} alt="Avatar 2" className="avatar" />
      </div>
      <div className="timer-text">
        <h2>Ми разом вже:</h2>
        <p>
          {timeData.days} днів, {timeData.hours} годин, {timeData.minutes}{" "}
          хвилин, {timeData.seconds} секунд
        </p>
      </div>
    </div>
  );
};

export default Main;
