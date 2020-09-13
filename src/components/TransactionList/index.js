import React from 'react';

import arrows from '../../assets/icons/circular-arrows.svg';
import RoundIcon from '../RoundIcon';

import * as S from './styles';

const TransactionList = ({ icon = arrows, items }) => {
  return (
    <S.List>
      {items.map(({ id, text, date, amount, currency, type }) => (
        <li key={id}>
          <S.LeftContainer>
            <RoundIcon src={icon} />
            <S.InfoContainer>
              <S.Transaction>{text}</S.Transaction>
              <S.Date>{date}</S.Date>
            </S.InfoContainer>
          </S.LeftContainer>
          <S.InfoContainer right={true}>
            <S.Amount transaction={type}>{amount}</S.Amount>
            <S.Currency>{currency}</S.Currency>
          </S.InfoContainer>
        </li>
      ))}
    </S.List>
  );
};

export default TransactionList;
