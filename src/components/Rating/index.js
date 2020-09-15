import React from 'react';

import * as S from './styles';

import Star from '../Star';

const Rating = () => {
  const startAmount = [0, 1, 2, 3, 4];

  const Stars = startAmount.map((item) => (
    <Star key={item.toString()} full={item < 4} />
  ));

  return (
    <S.Container>
      <S.Rating>
        <p>4.3</p>
      </S.Rating>
      {Stars}
      <S.ReviewsAmount>360 reviews</S.ReviewsAmount>
    </S.Container>
  );
};

export default Rating;
