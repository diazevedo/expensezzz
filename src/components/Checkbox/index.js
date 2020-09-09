import React from 'react';

import * as S from './styles';

const Checkbox = ({ label }) => {
  return (
    <S.Label>
      <S.Checkbox />
      <S.Span />
      {label}
    </S.Label>
  );
};

export default Checkbox;
