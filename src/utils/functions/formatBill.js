import { parseISO, format } from 'date-fns';

const formatBill = (bills) => {
  const billsFormatted = bills.map((bill) => ({
    ...bill,
    date: format(parseISO(bill.start_date), 'dd/MM/yyyy'),
  }));

  return billsFormatted;
};

export default formatBill;
