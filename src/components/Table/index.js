import React from 'react';
import TrBody from '../../components/TrBody';

import * as S from './styles';
import menuDots from '../../assets/icons/menu-dots.svg';
import Isaiah from '../../assets/images/isaiah.png';

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

const data = [
  {
    id: 'DC01',
    person: 'Lucas Wells',
    avatar_url: 'https://randomuser.me/api/portraits/men/0.jpg',
    amount: '$680',
    date: '01-10-2018',
    state: 2,
  },
  {
    id: 'DC02',
    person: 'Carl Lane',
    avatar_url: 'https://randomuser.me/api/portraits/thumb/women/68.jpg',
    amount: '$750',
    date: '01-10-2018',
    state: 1,
  },
  {
    id: 'DC03',
    person: 'Isaiah Howard',
    avatar_url: Isaiah,
    amount: '$450',
    date: '01-10-2018',
    state: 2,
  },
];

function Table({ trs = headers }) {
  return (
    <S.Section>
      <header>
        <h2>Income</h2>
        <button>
          <img src={menuDots} alt="Menu options" />
        </button>
      </header>
      <S.Table>
        <thead>
          <tr>
            {headers.map(({ text, key }) => (
              <th key={key}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, person, avatar_url, amount, date, state }) => (
            <TrBody
              key={id}
              label={id}
              avatar={avatar_url}
              name={person}
              amount={amount}
              date={date}
              state={state}
            />
          ))}
        </tbody>
      </S.Table>
    </S.Section>
  );
}

export default Table;
