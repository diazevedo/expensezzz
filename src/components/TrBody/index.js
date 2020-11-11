import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import Checkbox from '../../components/Checkbox';
import Status from '../../components/Status';

import * as S from './styles';

function TrBody({
  label,
  avatar = 'https://randomuser.me/api/portraits/men/0.jpg',
  name,
  amount,
  date,
  state,
}) {
  const [selected, setSelected] = React.useState(false);

  return (
    <S.Tr selected={selected}>
      <S.TD data-label="#">
        <Checkbox label={label} onCheck={() => setSelected((s) => !s)} />
      </S.TD>
      <S.TDProfile data-label="name">
        <ProfileCard avatar_url={avatar} name={name} />
      </S.TDProfile>
      <S.TDAmountDate data-label="amount">{amount}</S.TDAmountDate>
      <S.TDAmountDate data-label="date">{date}</S.TDAmountDate>
      <S.TD data-label="status">
        <Status state={state} />
      </S.TD>
    </S.Tr>
  );
}

export default TrBody;
