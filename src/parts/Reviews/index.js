import React from 'react';

import payments from '../../utils/data/paymentHistory';

import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import Rating from '../../components/Rating';

const Reviews = () => {
  return (
    <Section>
      <SectionHeader title="Recent reviews" />
      <Rating />
    </Section>
  );
};

export default Reviews;
