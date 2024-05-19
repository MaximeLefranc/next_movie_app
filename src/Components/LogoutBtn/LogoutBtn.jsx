'use client';

import { signOut } from 'next-auth/react';

import styles from './LogoutBtn.module.scss';

const LogoutBtn = ({ locale }) => {
  let logout = 'Déconnexion';

  if (locale === 'en') {
    logout = 'Logout';
  } else if (locale === 'es') {
    logout = 'Desconexión';
  }

  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: '/' })}>{logout}</button>
    </div>
  );
};

export default LogoutBtn;
