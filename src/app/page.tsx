import React from 'react';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div className='flex flex-col px-4 py-8 min-h-screen h-screen justify-center w-full items-center'>
      <h1 className='font-bold'>Welcome to NextJS</h1>
      <div className='xl:w-full max-w-lg rounded-lg shadow-2xl'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
