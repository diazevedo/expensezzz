import React from 'react';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';
import * as S from './styles';

const Period = ({ text = 'text', handlePreviousPeriod, handleNextPeriod }) => {
  return (
    <S.Container>
      <button onClick={() => handlePreviousPeriod()}>
        <img src={leftArrow} alt="previous period" width="9" />
      </button>
      <p>{text}</p>
      <button onClick={() => handleNextPeriod()}>
        <img src={rightArrow} alt="next period" width="9" />
      </button>
    </S.Container>
  );
};

export default Period;