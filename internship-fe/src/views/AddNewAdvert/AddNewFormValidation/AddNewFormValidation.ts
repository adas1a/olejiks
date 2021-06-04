import * as Yup from 'yup';

const phoneRegExp = /^\d{9}$/;

export const AddNewFormValidation = Yup.object({
  advertTitle: Yup.string()
    .min(16, 'The title cannot be shorter than 16 characters.')
    .max(70, 'Title must be less than 70 characters')
    .required('The title is the most important, don\'t forget about it'),
  category: Yup.string()
    .required('This field is required '),
  description: Yup.string()
    .min(80, 'At least 80 characters. Remember about detailed information or damage (if any)')
    .max(1000, 'Description must be less than 1000 characters')
    .required('At least 80 characters. Remember about detailed information or damage (if any)'),
  location: Yup.string()
    .min(3, 'At least 3 characters long')
    .required('Location is required'),
  sellerName: Yup.string()
    .min(3, 'At least 3 characters long')
    .required('Seller name is required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  number: Yup.string().matches(phoneRegExp, 'Phone number is not valid, must be 9 numbers').required('Number is required'),
  acceptTerms: Yup.bool().oneOf([true], 'Don\'t forget to accept'),
});