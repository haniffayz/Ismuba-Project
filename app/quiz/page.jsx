'use client';
import React, { useState, useEffect } from 'react';
import { quiz } from '../data.js';

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // Shuffle the questions array when component mounts
    setShuffledQuestions(shuffle(quiz.questions));
  }, []);

  const shuffle = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Update active question based on index
  useEffect(() => {
    if (activeQuestion < shuffledQuestions.length) {
      const { question, dalil, answers, correctAnswer } = shuffledQuestions[activeQuestion];
      setQuestionData({ question, dalil, answers, correctAnswer });
    }
  }, [activeQuestion, shuffledQuestions]);

  // Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === questionData.correctAnswer) {
      setSelectedAnswer(true);
      // console.log('true');
    } else {
      setSelectedAnswer(false);
      // console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== shuffledQuestions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  // Initial question data
  const [questionData, setQuestionData] = useState({
    question: '',
    dalil: '',
    answers: [],
    correctAnswer: '',
  });

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'
    style={{
      backgroundImage: "url('/Image/smamx.webp')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <h1 className='2xl:text-4xl text-3xl mb-6 text-slate-950 font-bold'>Islamic Quiz</h1>
      <div className='text-xl 2xl:text-2xl mb-6 text-black font-semibold'>
        Pertanyaan: {activeQuestion + 1}/{shuffledQuestions.length}
      </div>
      <div className='w-full max-w-lg md:max-w-xl lg:max-w-2xl'>
        {!showResult ? (
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='mb-6 text-xl 2xl:text-3xl font-semibold'>{questionData.dalil}</div>
            <div className='mb-6 2xl:text-xl font-semibold'>{questionData.question}</div>
            <ul className='2xl:text-xl'>
              {questionData.answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`cursor-pointer py-2 px-4 rounded-md ${
                    selectedAnswerIndex === idx ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                  }`}
                >
                  {answer}
                </li>
              ))}
            </ul>
            <button
              onClick={nextQuestion}
              disabled={!checked}
              className={`mt-6 px-4 py-2 rounded-md ${
                !checked ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'
              }`}
            >
              <div className='2xl:text-2xl'>{activeQuestion === shuffledQuestions.length - 1 ? 'Finish' : 'Next'}</div>
            </button>
          </div>
        ) : (
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='flex justify-center items-center text-3xl font-bold'>Hasil</h3>
            <h3 className='flex justify-center items-center text-2xl'>
              NILAI: {(result.score / (shuffledQuestions.length * 5)) * 100}
            </h3>
            <p className='flex justify-center items-center text-xl'>Total Pertanyaan: {shuffledQuestions.length}</p>
            <p className='flex justify-center items-center text-xl'>Jawaban Benar: {result.correctAnswers}</p>
            <p className='flex justify-center items-center text-xl'>Jawaban Salah: {result.wrongAnswers}</p>
            <button
              onClick={() => window.location.reload()}
              className='mt-6 px-4 py-2 rounded-md bg-blue-500 text-white'
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;




