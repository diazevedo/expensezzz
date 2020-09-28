import React from 'react';

import * as S from './styles';

const Switch = ({ label = 'dark mode' }) => {
  /** still need to create a state that comes from the context so we can control
   * colors
   */

  return (
    <S.Label>
      {label}
      <S.Check />
      <S.Controller />
    </S.Label>
  );
};

export default Switch;
