import React from 'react';

import * as S from './styles.js';

const Avatar = ({ img = 'https://picsum.photos/id/1025/200/200' }) => {
  return <S.Img src={img} alt="Avatar" />;
};

export default Avatar;
