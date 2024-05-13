'use client';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormProps {
  initialValues: LoginFormValues;
  onSubmit: () => void;
}

const LoginForm = () => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);

    setText(e.target.value);
  };

  const handleSubmit = () => {
    console.log('oke');
    setText('');
  }

  return (
    <div className='p-5'>
      <h1 className='font-bold text-center'>Log in</h1>
      <form className='grid gap-4' onSubmit={() => handleSubmit()}>
        <div>
          <TextField
            fullWidth
            id='outlined'
            label='Email'
            placeholder='abc@email.com'
            type='text'
            autoComplete='email'
            value={text}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id='outlined'
            label='Password'
            placeholder='*********'
            type='text'
            autoComplete='new-password'
          />
        </div>
        <Button variant='contained'>Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
