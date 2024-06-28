'use client';
import { TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues ?? defaultLoginForm,
    onSubmit: (values) => {
      const data = { email: values.email, password: values.password };
      // if (onSubmitForm) {
      //   onSubmitForm(data);
      // }
      router.push('/dashboard');
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
            id='email'
            label='Email'
            name='email'
            placeholder='abc@email.com'
            type='email'
            autoComplete='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            helperText = {formik.touched.email && formik.errors.email}
            error = {formik.touched.email && Boolean(formik.errors.email)}
            InputLabelProps={{shrink: true}}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id='password'
            label='Password'
            name='password'
            placeholder='*********'
            type='password'
            autoComplete='new-password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText = {formik.touched.password && formik.errors.password}
            error = {formik.touched.password && Boolean(formik.errors.password)}
            InputLabelProps={{shrink: true}}
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
