import React, { useMemo, useCallback, useState } from 'react';
import { add, sub, startOfWeek, endOfWeek, format } from 'date-fns';
import useFetch from '../../hooks/useFetch';

import * as S from './styles';

import Table from '../../components/Table';
import CreditCard from '../../components/CreditCard';

import PaymentHistory from '../../parts/PaymentHistory';
import MonthlyProfit from '../../parts/MonthlyProfit';
import Reviews from '../../parts/Reviews';
import LastCosts from '../../parts/LastCosts';

import formatBills from '../../utils/functions/formatBill';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [page, setPage] = useState(1);

  const [bills, , loadingBills] = useFetch({
    url: useMemo(() => '/bills', []),
    options: useMemo(() => ({ range: 'week', date: currentDate, page }), [
      currentDate,
      page,
    ]),
    callback: useCallback((bills) => formatBills(bills), []),
  });

  const [billsStartDate, setBillsStartDate] = useState('');
  const [billsEndDate, setBillsEndDate] = useState('');

  const handleNextBillPeriod = () => {
    const newDate = startOfWeek(add(currentDate, { weeks: 1 }), {
      weekStartsOn: 1,
    });

    setCurrentDate(newDate);
  };

  const handlePreviousBillPeriod = () => {
    const newDate = startOfWeek(sub(currentDate, { weeks: 1 }), {
      weekStartsOn: 1,
    });

    setCurrentDate(newDate);
  };

  const handlePreviousPage = () => {
    console.log('pppp');
    if (page === 1) {
      return;
    }

    setPage((previousPage) => previousPage - 1);
  };

  const handleNextPage = () => {
    setPage((previousPage) => previousPage + 1);
  };

  React.useEffect(() => {
    setBillsStartDate(
      format(startOfWeek(currentDate, { weekStartsOn: 1 }), 'dd/MM')
    );

    setBillsEndDate(
      format(endOfWeek(currentDate, { weekStartsOn: 1 }), 'dd/MM')
    );
  }, [currentDate]);

  return (
    <S.Container>
      <S.Cards>
        <CreditCard />
        <CreditCard
          lastNumbers={4885}
          owner="Diego Azevedo"
          month={12}
          year={22}
        />
      </S.Cards>

      <Table
        title="Week's bills"
        content={bills}
        periodText={`${billsStartDate} - ${billsEndDate}`}
        handleNextPeriod={handleNextBillPeriod}
        handlePreviousPeriod={handlePreviousBillPeriod}
        loadingBills={loadingBills}
        page={page}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />

      <LastCosts />
      <MonthlyProfit />

      <PaymentHistory />
      <Reviews />
    </S.Container>
  );
};

export default Dashboard;
