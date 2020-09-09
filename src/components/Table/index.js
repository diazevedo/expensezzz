import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import Checkbox from '../../components/Checkbox';
import Status from '../../components/Status';

import * as S from './styles';
import menuDots from '../../assets/icons/menu-dots.svg';

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
          <tr>
            <td>
              <Checkbox label="DC01" />
            </td>
            <S.TDProfile>
              <ProfileCard name="Lucas Wells" />
            </S.TDProfile>
            <td>$680</td>
            <td>01-10-2018</td>
            <td>
              <Status state={2} />
            </td>
          </tr>
          <tr>
            <td>DC01</td>
            <S.TDProfile>
              <ProfileCard name="Lucas Wells" />
            </S.TDProfile>
            <td>$680</td>
            <td>01-10-2018</td>
            <td>
              <Status state={1} />
            </td>
          </tr>
          <tr>
            <td>DC01</td>
            <S.TDProfile>
              <ProfileCard name="Lucas Wells" />
            </S.TDProfile>
            <td>$680</td>
            <td>01-10-2018</td>
            <td>
              <Status state={1} />
            </td>
          </tr>
        </tbody>
      </S.Table>
    </S.Section>
  );
}

export default Table;
