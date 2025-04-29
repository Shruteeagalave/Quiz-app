import React from 'react';
import Image from 'next/image';
import logo from '../assets/quiz-logo.png'
import './Header.css'

export default function Header() {
  return (
    <header>
        <div className='flex justify-center items-center '>
        <Image src={logo}   alt='' className="w-80 h-auto"/>
      
      </div>
      <h1>ReactQuiz</h1>
    </header>
  )
}
