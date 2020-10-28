import React from 'react';

import * as S from './styles';
import Period from '../Period';

import menuDots from '../../assets/icons/menu-dots.svg';

const SectionHeader = ({
  title,
  options = [],
  periodText,
  handlePreviousPeriod,
  handleNextPeriod,
}) => {
  return (
    <S.Header>
      <h2>{title}</h2>
      <Period
        text={periodText}
        handlePreviousPeriod={handlePreviousPeriod}
        handleNextPeriod={handleNextPeriod}
      ></Period>
      <button>
        <img src={menuDots} alt="Menu options" />
      </button>
    </S.Header>
  );
};

export default SectionHeader;
