import React from 'react';
import * as S from './styles';

const RoundIcon = ({ src }) => {
  return (
    <S.Icon>
      <img src={src} alt="Payment icon" />
    </S.Icon>
  );
};

export default RoundIcon;
