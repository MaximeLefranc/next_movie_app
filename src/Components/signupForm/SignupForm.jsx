'use client';

import { signIn, useSession } from 'next-auth/react';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignupForm.module.scss';

const SignupForm = ({ locale }) => {
  const { status } = useSession();
  const router = useRouter();

  const handlerFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        signIn();
      }
    });
  };

  const i18n = {
    fr: {
      register: 'Inscription',
      mailPlaceholder: 'E-mail',
      signup: "S'inscrire",
    },
    es: {
      register: 'Inscripción',
      mailPlaceholder: 'Correo electrónico',
      signup: 'Inscríbete',
    },
    en: {
      register: 'Register',
      mailPlaceholder: 'Email',
      signup: 'Sign up',
    },
  };

  let dictionary = i18n.fr;
  if (locale === 'en') {
    dictionary = i18n.en;
  } else if (locale === 'es') {
    dictionary = i18n.es;
  }

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/user/profile');
    }
  }, [status, router]);

  return (
    <div className={styles.signupForm}>
      <form onSubmit={handlerFormSubmit}>
        <h1>{dictionary.register}</h1>
        <input
          type="text"
          name="email"
          placeholder={dictionary.mailPlaceholder}
        />
        <input type="password" name="password" placeholder="******" />
        <input type="submit" value={dictionary.signup} />
      </form>
    </div>
  );
};

export default SignupForm;
