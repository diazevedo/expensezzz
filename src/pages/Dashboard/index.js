import React from 'react';

import { Container } from './styles';

import Table from '../../components/Table';
import PaymentHistory from '../../parts/PaymentHistory';

const Dashboard = () => {
  return (
    <Container>
      <Table />
      <PaymentHistory />
    </Container>
  );
};

export default Dashboard;
