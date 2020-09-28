import React from 'react';

import { Container } from './styles';

import Table from '../../components/Table';
import CreditCard from '../../components/CreditCard';
import PaymentHistory from '../../parts/PaymentHistory';
import MonthlyProfit from '../../parts/MonthlyProfit';
import Reviews from '../../parts/Reviews';
import LastCosts from '../../parts/LastCosts';

const Dashboard = () => {
  return (
    <Container>
      <CreditCard />
      <Table />
      <PaymentHistory />
      <MonthlyProfit />
      <Reviews />
      <LastCosts />
    </Container>
  );
};

export default Dashboard;
