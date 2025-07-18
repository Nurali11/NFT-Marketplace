"use client";
import React, { useEffect, useState } from "react";
import { FormatTime } from "./Format";
import Button from "./Button";

const Timer = ({ endTime, button }: { endTime: string, button?: boolean }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const end = new Date(endTime);
      const diffMs = end.getTime() - now.getTime();
      if (diffMs <= 0) return { hours: 0, minutes: 0, seconds: 0 };
      const totalSeconds = Math.floor(diffMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className={`${button ? "bg-[#3B3B3B]" : "bg-black/20"}  w-[300px] backdrop-blur-lg rounded-2xl p-6 border border-white/20`}>
      <div className="text-white/80 text-sm mb-2">Auction ends in:</div>
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-white">
            {FormatTime(timeLeft.hours)}
          </div>
          <div className="text-white/60 text-xs">Hours</div>
        </div>
        <div className="text-white text-2xl">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">
            {FormatTime(timeLeft.minutes)}
          </div>
          <div className="text-white/60 text-xs">Minutes</div>
        </div>
        <div className="text-white text-2xl">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">
            {FormatTime(timeLeft.seconds)}
          </div>
          <div className="text-white/60 text-xs">Seconds</div>
        </div>
      </div>
      {button && (
        <div className="items-center justify-center flex">
            <Button title="Place a bid" type="button" extraClass="!w-full flex items-center justify-center mt-[20px]" variant="filled"/>
        </div>
)}
    </div>
  );
};

export default Timer;
