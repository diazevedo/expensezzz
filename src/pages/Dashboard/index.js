import React from 'react';

import { Container } from './styles';

import Table from '../../components/Table';
import PaymentHistory from '../../parts/PaymentHistory';
import MonthlyProfit from '../../parts/MonthlyProfit';
import Reviews from '../../parts/Reviews';

const Dashboard = () => {
  return (
    <Container>
      {/* <Table /> */}
      {/* <PaymentHistory /> */}
      {/* <MonthlyProfit /> */}
      <Reviews />
    </Container>
  );
};

export default Dashboard;
