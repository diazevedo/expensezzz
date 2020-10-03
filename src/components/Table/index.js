import React from 'react';
import Section from '../../components/Section';
import TrBody from '../../components/TrBody';

import * as S from './styles';
import Isaiah from '../../assets/images/isaiah.png';

import SectionHeader from '../../components/SectionHeader';

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
    person: 'Lucas Wells',
    avatar_url: Isaiah,
    amount: '$450',
    date: '01-10-2018',
    state: 2,
  },
  {
    id: 'DC04',
    person: 'Isaiah Howard',
    avatar_url: 'https://randomuser.me/api/portraits/men/0.jpg',
    amount: '$450',
    date: '01-10-2018',
    state: 2,
  },
  {
    id: 'DC05',
    person: 'Bobby Holt',
    avatar_url: Isaiah,
    amount: '$450',
    date: '01-10-2018',
    state: 2,
  },
  {
    id: 'DC06',
    person: 'Ronald Reeves',
    avatar_url: 'https://randomuser.me/api/portraits/men/0.jpg',
    amount: '$120',
    date: '01-10-2018',
    state: 2,
  },
  {
    id: 'DC07',
    person: 'Lucas Wells',
    avatar_url: Isaiah,
    amount: '$450',
    date: '01-10-2018',
    state: 2,
  },
  {
    id: 'DC09',
    person: 'Isaiah Howard',
    avatar_url: Isaiah,
    amount: '$450',
    date: '01-10-2018',
    state: 2,
  },
  {
    id: 'DC10',
    person: 'Tim Green',
    avatar_url: 'https://randomuser.me/api/portraits/men/0.jpg',
    amount: '$400',
    date: '01-10-2019',
    state: 2,
  },
];

function Table({ trs = headers }) {
  return (
    <Section>
      <SectionHeader title="income" />
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
    </Section>
  );
}

export default Table;
