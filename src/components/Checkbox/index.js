import React from 'react';

import * as S from './styles';

const Checkbox = ({ label, onCheck }) => {
  return (
    <S.Label>
      <S.Checkbox onClick={() => onCheck()} />
      <S.Span />
      {label}
    </S.Label>
  );
};

export default Checkbox;
