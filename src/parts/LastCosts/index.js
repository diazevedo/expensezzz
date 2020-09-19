import React from 'react';

import SectionHeader from '../../components/SectionHeader';
import * as S from './styles';

import monthData from '../../utils/data/monthData';

const LastCosts = () => {
  return (
    <S.Container>
      <SectionHeader title="Last costs" />
      <S.Label income={true}>income</S.Label>
      <S.Label>spending</S.Label>
      <S.ChartContent>
        <S.Line>
          <p>$200</p>
          <S.DottedLine></S.DottedLine>
        </S.Line>
        <S.Line>
          <p>$100</p>
          <S.DottedLine></S.DottedLine>
        </S.Line>
        <S.Chart>
          {monthData.map(({ month, income, expenses }, index) => (
            <S.MonthData key={month} index={index + 1}>
              <S.Bars income={true} value={income} />
              <S.Bars value={expenses} />
              <S.MonthLabel>{month.substring(0, 3)}</S.MonthLabel>
            </S.MonthData>
          ))}
        </S.Chart>
      </S.ChartContent>
    </S.Container>
  );
};

export default LastCosts;
