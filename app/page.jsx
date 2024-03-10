'use client'
import Image from 'next/image';
import HomePage from './component/HomePage/Home';
import './globals.css';
import { useRouter } from "next/navigation"
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Home() {

  const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleStartClick = () => {
    (username.trim() === '' || password.trim() === '') 
    ? 
    Swal.fire({
      title: "Login dulu brayy😁",
      icon: 'warning',
      text: "Login dulu sebelum mulai",
    })
    : 
    router.push('/quiz')
  };

  return (
    <main
      className='items-center justify-center flex w-full h-[100vh] flex-col 2xl:p-24 xl:p-10 main min-h-[100vh]'
      style={{
        backgroundImage: "url('/Image/smamx.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='2xl:px-[32rem] md:px-60'>
        <div className='flex text-center items-center justify-center p-6 text-4xl'>
          <h1 className='text-slate-950 font-bold 2xl:text-4xl xl:text-3xl'>ISLAMIC QUIZ</h1>
        </div>
        <div>
          <HomePage setUsername={setUsername} setPassword={setPassword} />
        </div>
        <button className='2xl:text-2xl xl:text-xl' onClick={handleStartClick}>
            START
        </button>
      </div>
    </main>
  );
}




