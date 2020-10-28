import React from 'react';
import Section from '../../components/Section';
import TrBody from '../../components/TrBody';

import * as S from './styles';

import SectionHeader from '../../components/SectionHeader';
import TFoot from '../../components/TFoot';

const headers = [
  {
    text: '#',
    key: '0',
  },
  {
    text: 'name',
    key: '1',
  },
  {
    text: 'amount',
    key: '2',
  },
  {
    text: 'date',
    key: '3',
  },
];

function Table({
  content,
  periodText,
  trs = headers,
  title = 'income',
  handlePreviousPeriod,
  handleNextPeriod,
  loadingBills,
  page,
  handlePreviousPage,
  handleNextPage,
}) {
  return (
    <Section>
      <SectionHeader
        title={title}
        periodText={periodText}
        handlePreviousPeriod={handlePreviousPeriod}
        handleNextPeriod={handleNextPeriod}
      />
      {loadingBills ? (
        <p>Loading</p>
      ) : (
        <S.Table>
          <thead>
            <tr>
              {headers.map(({ text, key }) => (
                <th key={key}>{text}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.map(({ id, creditor, amount, date }, index) => (
              <TrBody
                key={id}
                label={`DC${index.toString().padStart(2, 0)}`}
                name={creditor.name}
                amount={amount}
                date={date}
                state={2}
              />
            ))}
          </tbody>
          <TFoot
            page={page}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </S.Table>
      )}
    </Section>
  );
}

export default Table;
