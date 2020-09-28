import React from 'react';

import logo from '../../assets/icons/visa-pay-logo.svg';

import * as S from './styles';

const CreditCard = ({
  lastNumbers = '4765',
  owner = 'Stephen Austin',
  month = '04',
  year = '21',
}) => {
  return (
    <S.Container>
      <S.CardLogo src={logo} />
      <S.Details>
        <S.Numbers>
          <span>＊＊＊＊ ＊＊＊＊ ＊＊＊＊ </span>
          {lastNumbers}
        </S.Numbers>
        <S.TextWrapper align="left">
          <S.Text>card holder</S.Text>
          <S.Text>{owner}</S.Text>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text align="right">valid thru</S.Text>
          <S.Text align="right">
            {month} / {year}
          </S.Text>
        </S.TextWrapper>
      </S.Details>
    </S.Container>
  );
};

export default CreditCard;
