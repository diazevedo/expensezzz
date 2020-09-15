import React from 'react';

import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import Rating from '../../components/Rating';
import ReviewsList from '../../components/ReviewsList';

const Reviews = () => {
  return (
    <Section>
      <SectionHeader title="Recent reviews" />
      <Rating />
      <ReviewsList />
    </Section>
  );
};

export default Reviews;
