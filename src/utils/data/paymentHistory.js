import { DEBIT, INCOME } from './transactions';

const payments = [
  {
    id: '01',
    text: 'Deposit from ATL',
    amount: '- 1,470',
    currency: 'USD',
    type: DEBIT,
    date: '5 march, 18:33',
  },
  {
    id: '02',
    text: 'Deposit PayPal',
    amount: '+ 2,220',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
  {
    id: '03',
    text: 'Deposit from ATL',
    amount: '+ 250',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
  {
    id: '04',
    text: 'Cancelled',
    amount: '0',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
  {
    id: '05',
    text: 'Refund',
    amount: '- 950',
    currency: 'USD',
    type: DEBIT,
    date: '5 march, 18:33',
  },
  {
    id: '06',
    text: 'Deposit from ATL',
    amount: '+ 250 ',
    currency: 'USD',
    type: INCOME,
    date: '5 march, 18:33',
  },
];

export default payments;
