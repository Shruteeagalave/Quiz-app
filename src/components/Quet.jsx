import React, { useState } from 'react';
import QuetionTimer from './QuetionTimer';
import Answers from './Answers';
import Quetion from "../Quetion";


export default function Quet({index , onSelectAnswer  , onSkipAnwser}) 
{
  const [answer , setAnswer]=useState({
    selectedAnswer:'',
    isCorrect : null
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }


  if(answer.isCorrect !== null){
    timer = 20000;
  }
function handleSelectAnswer(answer){
  setAnswer({
    selectedAnswer : answer,
    isCorrect: null
  })

  setTimeout(() => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect : Quetion[index].answers[0] === answer
    })
    
  setTimeout(() => {
    onSelectAnswer(answer);
  } , 2000)


  }, 1000)
}


let answerState = '';
if (answer.selectedAnswer && answer.isCorrect !== null) {
  answerState = answer.isCorrect ? 'correct' : 'wrong';
}else if(answer.selectedAnswer){
  answerState = 'answered';
}


  return (
    <div id="quetion">
        <QuetionTimer 
                      key={timer}
                      timeout={timer} 
                      onTimeOut={answer.selectedAnswer==='' ? onSkipAnwser : null} 
                      mode={answerState}/>
        <h2>{Quetion[index].text}</h2>
        <Answers
                answers={Quetion[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
        />
       
      </div>
  )
}
