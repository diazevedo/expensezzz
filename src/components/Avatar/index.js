import React from 'react';

import * as S from './styles.js';

const Avatar = ({
  img = 'https://picsum.photos/id/1025/200/200',
  alt = 'Avatar',
}) => {
  return <S.Img src={img} alt={alt} />;
};

export default Avatar;
