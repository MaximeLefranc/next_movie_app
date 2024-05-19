'use client';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, useSession } from 'next-auth/react';

const Like = ({ mediaId }) => {
  const { data: session } = useSession();

  const handleLikeClicked = (event) => {
    event.preventDefault();
    if (!session) {
      signIn();
    }
    fetch(`/api/like/${mediaId}`, {
      method: 'POST',
    });
  };

  return (
    <div onClick={handleLikeClicked}>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default Like;
