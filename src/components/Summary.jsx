import React from 'react';
import QuizComplete from "../assets/quiz-complete.png";
import Quetion from '@/Quetion';
import Image from 'next/image';


export default function Summary({userAnswers}) {
const skippedAnswers = userAnswers.filter(answer => answer === null);
const correctAnswers = userAnswers.filter((answer , index) => answer === Quetion[index].answers[0]);


const skipppedAnswerShare =Math.round((skippedAnswers.length / userAnswers.length)  * 100);

const correctAnswerShare =Math.round((correctAnswers.length / userAnswers.length)  * 100);

const wrongAnswerShare = 100 - skipppedAnswerShare - correctAnswerShare;

  return (
    <div id='summary'>
        <div id="summary">
        <Image src={QuizComplete} alt="Tropy" />
        <h1>Quiz Completed !</h1>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skipppedAnswerShare}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctAnswerShare}%</span>
                <span className='text'>Answered Correctly</span>
            </p><p>
                <span className='number'>{wrongAnswerShare}%</span>
                <span className='text'>Ansered Incorrectly</span>
            </p>

        </div>
        <ol>
            {userAnswers.map((answer , index) => {
             let cssClass = "user-answer";

             if(answer === null){
                cssClass += "skipped";
             }else if(answer === Quetion[index].answers[0]){
                cssClass += ' correct'
             }else{
                cssClass += ' wrong'
             }

                return(  <li key={answer}> 
                    <h3>{index + 1}</h3>
                    <p className='quetion'>{Quetion[index].text}</p>
                    <p className={cssClass}>{answer}</p>
                </li>)
            }

            )}
          
        </ol>
      </div>
      
    </div>
  )
}
