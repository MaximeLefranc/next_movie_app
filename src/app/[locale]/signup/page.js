import React from 'react';
import SignupForm from '@/Components/signupForm/SignupForm';

const SignupPage = ({ params: { locale } }) => {
  return <SignupForm locale={locale} />;
};

export default SignupPage;
