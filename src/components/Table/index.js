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
  title = 'income',
  handlePreviousPeriod,
  handleNextPeriod,
  loadingBills,
}) {
  const [page, setPage] = React.useState(0);

  /** temporarily  range*/
  const RANGE_OF_START = React.useMemo(
    () => [0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 100],
    []
  );

  const handlePreviousPage = () => {
    if (page === 0) return;

    setPage((previousPage) => previousPage - 1);
  };

  const handleNextPage = () => {
    if (content.length <= RANGE_OF_START[page + 1]) return;

    setPage((previousPage) => previousPage + 1);
  };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(() =>
      content.slice(RANGE_OF_START[page], RANGE_OF_START[page + 1])
    );
  }, [page, content, RANGE_OF_START]);

  return (
    <Section>
      <SectionHeader
        title={title}
        periodText={periodText}
        handlePreviousPeriod={handlePreviousPeriod}
        handleNextPeriod={handleNextPeriod}
        periodEdit
      />
      {loadingBills ? (
        <p>Loading</p>
      ) : (
        <S.Table>
          <S.Header>
            <tr>
              {headers.map(({ text, key }) => (
                <th key={key}>{text}</th>
              ))}
            </tr>
          </S.Header>
          <tbody>
            {data.map(({ id, creditor, amount, date }, index) => (
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
            page={page + 1}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </S.Table>
      )}
    </Section>
  );
}

export default Table;
