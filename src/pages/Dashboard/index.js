import React from 'react';

import { Container } from './styles';

import Table from '../../components/Table';
import PaymentHistory from '../../parts/PaymentHistory';
import MonthlyProfit from '../../parts/MonthlyProfit';

const Dashboard = () => {
  return (
    <Container>
      <Table />
      <PaymentHistory />
      <MonthlyProfit />
    </Container>
  );
};

export default Dashboard;
