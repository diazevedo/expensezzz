import React from 'react';

import logo from '../../assets/icons/visa-pay-logo.svg';

import * as S from './styles';

const CreditCard = () => {
  return (
    <S.Container>
      <S.CardLogo src={logo} />
      <S.Details>
        <S.Numbers>
          <span>＊＊＊＊ ＊＊＊＊ ＊＊＊＊ </span>4765
        </S.Numbers>
        <S.TextWrapper align="left">
          <S.Text>card holder</S.Text>
          <S.Text>Stephen Austin</S.Text>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text align="right">valid thru</S.Text>
          <S.Text align="right">04 / 21</S.Text>
        </S.TextWrapper>
      </S.Details>
    </S.Container>
  );
};

export default CreditCard;
