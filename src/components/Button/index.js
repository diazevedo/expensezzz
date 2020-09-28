import React from 'react';

import img from '../../assets/icons/download.svg';

import * as S from './styles';

function Button({
  onClick = () => console.log('it will download a file'),
  alt = 'Download',
}) {
  return (
    <S.Button onClick={() => onClick()}>
      <span>Download</span>
      <img src={img} alt={alt} />
    </S.Button>
  );
}

export default Button;
