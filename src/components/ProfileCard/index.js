import React from 'react';

import Avatar from '../Avatar';

import * as S from './styles';

const ProfileCard = ({ name, avatar_url }) => {
  return (
    <S.Container>
      <Avatar img={avatar_url} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};

export default ProfileCard;
