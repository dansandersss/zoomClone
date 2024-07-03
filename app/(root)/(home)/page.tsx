"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const timeString = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const dateString = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(currentTime);

  return (
    <>
      <section className="flex size-full flex-col gap-10 text-white">
        <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold lg:text-7xl">
                {timeString}
              </h1>
              <p className="text-lg font-medium text-sky-1 lg:text-2xl">
                {dateString}
              </p>
            </div>
          </div>
        </div>
        <MeetingTypeList />
      </section>
    </>
  );
};

export default Home;
