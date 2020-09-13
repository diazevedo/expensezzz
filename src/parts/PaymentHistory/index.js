import React from 'react';

import payments from '../../utils/data/paymentHistory';

import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import TransactionList from '../../components/TransactionList';

const PaymentHistory = () => {
  return (
    <Section>
      <SectionHeader title="payment history " />
      <TransactionList items={payments} />
    </Section>
  );
};

export default PaymentHistory;
