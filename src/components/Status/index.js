import React from 'react';

import * as S from './styles';

function Status({ state }) {
  return (
    <S.Container state={state}>
      {state === 1 ? 'income' : 'expense'}
    </S.Container>
  );
}

export default Status;
