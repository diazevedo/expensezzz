import React from 'react';

import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import PaymentList from '../../components/PaymentList';

const PaymentHistory = () => {
  return (
    <Section>
      <SectionHeader title="payment history " />
      <PaymentList />
    </Section>
  );
};

export default PaymentHistory;
