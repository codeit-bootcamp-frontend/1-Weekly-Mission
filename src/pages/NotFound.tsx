import React from 'react';

import IMAGES from '../assets/images';

const NotFound = () => {
  return (
    <img
      src={IMAGES.errorImage}
      style={{ width: '100%', height: '100%' }}
      alt="404페이지"
    />
  );
};

export default NotFound;
