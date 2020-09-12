import React from 'react';

import { INCOME, DEBIT } from '../../utils/data/transactions';
import arrows from '../../assets/icons/circular-arrows.svg';
import RoundIcon from '../RoundIcon';

import * as S from './styles';

const payments = [
  {
    id: '01',
    text: 'Deposit from ATL',
    value: '- 1,470',
    currency: 'USD',
    type: DEBIT,
    date: '5 march, 18:33',
  },
  {
    id: '02',
    text: 'Deposit PayPal',
    value: '+ 2,220',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
  {
    id: '03',
    text: 'Deposit from ATL',
    value: '+ 250',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
  {
    id: '04',
    text: 'Cancelled',
    value: '0',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
  {
    id: '05',
    text: 'Refund',
    value: '- 950',
    currency: 'USD',
    type: DEBIT,
    date: '5 march, 18:33',
  },
  {
    id: '06',
    text: 'Deposit from ATL',
    value: '+ 250 ',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
];

const PaymentList = () => {
  return (
    <S.List>
      {payments.map(({ id, text, date, value, currency, type }) => (
        <li key={id}>
          <S.LeftContainer>
            <RoundIcon src={arrows} />
            <S.InfoContainer>
              <S.Transaction>{text}</S.Transaction>
              <S.Date>{date}</S.Date>
            </S.InfoContainer>
          </S.LeftContainer>
          <S.InfoContainer right={true}>
            <S.Amount transaction={type}>{value}</S.Amount>
            <S.Currency>{currency}</S.Currency>
          </S.InfoContainer>
        </li>
      ))}
    </S.List>
  );
};

export default PaymentList;
