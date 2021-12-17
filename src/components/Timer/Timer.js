import React, { useState, useEffect } from "react";
import CardDiv from "../UI/Card";
import classes from "./Timer.module.css";
import Button from "../Button";

const Timer = () => {
  const initialState = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    counter: 0,
  };
  
  const [counter, setCounter] = useState(0);
  const [seconds, setSecondsCounter] = useState("00");
  const [minutes, setMinutesCounter] = useState("00");
  const [hours, setHoursCounter] = useState("00");
  const [timerIsActive, setTimerIsActive] = useState(false);

  useEffect(() => {
    let timeInterval;

    if (timerIsActive) {
      timeInterval = setInterval(() => {
        const secondsCounter = counter % 60;
        const minutesCounter = Math.floor(counter / 60);
        const hoursCounter = Math.floor(counter / 3600);

        const computedSecond =
          String(secondsCounter).length === 1
            ? `0${secondsCounter}`
            : secondsCounter;
        const computedMinute =
          String(minutesCounter).length === 1
            ? `0${minutesCounter}`
            : minutesCounter;
        const computedHour =
          String(hoursCounter).length === 1 ? `0${hoursCounter}` : hoursCounter;

        setSecondsCounter(computedSecond);
        setMinutesCounter(computedMinute);
        setHoursCounter(computedHour);

        setCounter((counter) => counter + 1);
      }, 1000);

      return () => clearInterval(timeInterval);
    }
  }, [timerIsActive, counter]);

  const clearTimerHandler = () => {
    setSecondsCounter(initialState.seconds);
    setMinutesCounter(initialState.minutes);
    setHoursCounter(initialState.hours);
    setCounter(initialState.counter);
    setTimerIsActive(false);
  };

  const timerActiveHandler = (event) => {
    setTimerIsActive(!timerIsActive);
    if (event.type === "click" && timerIsActive) {
      clearTimerHandler();
    } else if (event.type === "dblclick") {
      setTimerIsActive(!timerIsActive);
    }
  };
  return (
    <div className={classes.container}>
      <CardDiv padding='1rem 0'>
        <div className={classes.timer}>
          <p>Hours</p>
          <p>{hours}</p>
        </div>
        <div className={classes.timer}>
          <p>Minutes</p>
          <p>{minutes}</p>
        </div>
        <div className={classes.timer}>
          <p>Seconds</p>
          <p>{seconds}</p>
        </div>
      </CardDiv>
      <CardDiv padding='1rem 0'>
        <Button onClick={timerActiveHandler}>Start/Stop</Button>
        <Button onDoubleClick={timerActiveHandler}>Wait</Button>
        <Button onClick={clearTimerHandler}>Reset</Button>
      </CardDiv>
    </div>
  );
};

export default Timer;
