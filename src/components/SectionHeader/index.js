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
  periodEdit = false,
}) => {
  return (
    <S.Header>
      <h2>{title}</h2>
      {periodEdit && (
        <Period
          text={periodText}
          handlePreviousPeriod={handlePreviousPeriod}
          handleNextPeriod={handleNextPeriod}
        />
      )}

      <button>
        <img src={menuDots} alt="Menu options" />
      </button>
    </S.Header>
  );
};

export default SectionHeader;
