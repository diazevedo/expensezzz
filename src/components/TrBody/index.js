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
      <td>
        <Checkbox label={label} onCheck={() => setSelected((s) => !s)} />
      </td>
      <S.TDProfile>
        <ProfileCard avatar_url={avatar} name={name} />
      </S.TDProfile>
      <S.TDAmountDate>{amount}</S.TDAmountDate>
      <S.TDAmountDate>{date}</S.TDAmountDate>
      <td>
        <Status state={state} />
      </td>
    </S.Tr>
  );
}

export default TrBody;
