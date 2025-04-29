"use client";

import React, { useState, useCallback, useRef } from "react";
import Quetion from "../Quetion";
import Image from "next/image";
import Quet from "./Quet";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);


  const activeQuetionIndex =userAnswers.length;

  const quizIsComplete = activeQuetionIndex === Quetion.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
      

  },[]);

  const handleSkipAnwser = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  }
 
 
  return (
    <div id="quiz">
     <Quet 
           key={activeQuetionIndex}
           index={activeQuetionIndex}
           onSelectAnswer={handleSelectAnswer}
          
           onSkipAnswer={handleSkipAnwser}
           />


    </div>
  );
}
