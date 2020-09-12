import React from 'react';

import * as S from './styles';

import menuDots from '../../assets/icons/menu-dots.svg';

const SectionHeader = ({ title, options = [] }) => {
  return (
    <S.Header>
      <h2>{title}</h2>
      <button>
        <img src={menuDots} alt="Menu options" />
      </button>
    </S.Header>
  );
};

export default SectionHeader;
