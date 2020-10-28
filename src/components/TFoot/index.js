import React from 'react';
import Period from '../Period';

import * as S from './styles';

function TFootter({
  page = 1,
  colspan = 5,
  handlePreviousPage,
  handleNextPage,
}) {
  return (
    <S.TFoot>
      <tr>
        <td colSpan={colspan}>
          <Period
            text={page}
            handlePreviousPeriod={handlePreviousPage}
            handleNextPeriod={handleNextPage}
          />
        </td>
      </tr>
    </S.TFoot>
  );
}

export default TFootter;
