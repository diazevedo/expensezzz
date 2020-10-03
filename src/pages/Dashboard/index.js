import React from 'react';

import * as S from './styles';

import Table from '../../components/Table';
import CreditCard from '../../components/CreditCard';

import PaymentHistory from '../../parts/PaymentHistory';
import MonthlyProfit from '../../parts/MonthlyProfit';
import Reviews from '../../parts/Reviews';
import LastCosts from '../../parts/LastCosts';

const Dashboard = () => {
  return (
    <S.Container>
      <S.Cards>
        <CreditCard />
        <CreditCard
          lastNumbers={4885}
          owner="Diego Azevedo"
          month={12}
          year={22}
        />
      </S.Cards>

      <Table />

      <LastCosts />
      <MonthlyProfit />

      <PaymentHistory />
      <Reviews />
    </S.Container>
  );
};

export default Dashboard;
