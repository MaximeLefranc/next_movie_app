import React from 'react';
import LogoutBtn from '@/Components/LogoutBtn/LogoutBtn';

const ProfilePage = ({ params: { locale } }) => {
  return (
    <div>
      <h1>Vous êtes connecté</h1>
      <LogoutBtn />
    </div>
  );
};

export default ProfilePage;
