import * as Yup from 'yup';

const phoneRegExp = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/;
export const AddNewFormValidation = Yup.object({
  title: Yup.string()
    .min(16, 'The title cannot be shorter than 16 characters.')
    .max(70, 'Title must be less than 70 characters')
    .required('The title is the most important, don\'t forget about it'),
  category: Yup.string().required('This field is required '),
  description: Yup.string()
    .min(80, 'At least 80 characters. Remember about detailed information or damage (if any)')
    .max(1000, 'Description must be less than 1000 characters')
    .required('At least 80 characters. Remember about detailed information or damage (if any)'),
  price:Yup.number().required('Price is required'),
  location: Yup.string()
    .min(3, 'At least 3 characters long')
    .required('Location is required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid, must be 9 numbers').required('Number is required'),
});

export const LoginValidation = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Enter password'),
});

export const RegisterValidation = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Enter password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password'),
});
