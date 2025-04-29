import React, { useEffect } from "react";
import { useState } from "react";

export default function QuetionTimer({ timeout, onTimeOut , mode}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
   const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () =>  clearInterval(interval);
    
  }, []);

  return (
    <div>
      <progress
       id="quetion-time"
       max={timeout} 
       value={remainingTime} 
       className={mode}
       />
    </div>
  );
}
