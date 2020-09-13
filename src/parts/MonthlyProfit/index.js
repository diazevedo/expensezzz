import React from 'react';

import payments from '../../utils/data/monthlyPayments';

import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import TransactionList from '../../components/TransactionList';

import wallet from '../../assets/icons/wallet.svg';

import * as S from './styles.js';

const MonthlyProfit = ({ title = 'Monthly profit', items = payments }) => {
  return (
    <Section>
      <SectionHeader title={title} />
      <S.ListTitle left={true}>12 Jul 2018</S.ListTitle>
      <S.ListTitle>Amount</S.ListTitle>
      <TransactionList icon={wallet} items={payments} />
    </Section>
  );
};

export default MonthlyProfit;
