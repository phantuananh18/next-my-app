'use client';
import { TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormProps {
  initialValues?: LoginFormValues;
  onSubmit?: (value: LoginFormValues) => void;
}

const defaultLoginForm: LoginFormValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

const LoginForm = (props: LoginFormProps) => {
  const { initialValues, onSubmit: onSubmitForm } = props;

  const formik = useFormik({
    initialValues: initialValues ?? defaultLoginForm,
    onSubmit: (values) => {
      const data = { email: values.email, password: values.password };
      if (onSubmitForm) {
        onSubmitForm(data);
      }
    },
    validationSchema: validationSchema,
  });

  return (
    <div className='p-5'>
      <h1 className='font-bold text-center'>Log in</h1>
      <form className='grid gap-4' onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            id='outlined'
            label='Email'
            placeholder='abc@email.com'
            type='text'
            autoComplete='email'
            value={formik.values.email}
            onChange={formik.handleChange}
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
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <Button variant='contained' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
