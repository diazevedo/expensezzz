import React from 'react';

import * as S from './styles';

const Card = ({ value }) => {
  return (
    <S.Container>
      <S.Text>current balance</S.Text>
      <S.Amount>{value}</S.Amount>
    </S.Container>
  );
};

export default Card;
