'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';

const LogoutLink = ({ logoutLabel, locale }) => {
  return (
    <li>
      <Link
        href={`/${locale}`}
        onClick={() => signOut({ callbackUrl: `/${locale}` })}>
        {logoutLabel}
      </Link>
    </li>
  );
};

export default LogoutLink;
