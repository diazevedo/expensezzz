import React from 'react';

import Avatar from '../Avatar';

import * as S from './styles';

const ProfileCard = ({ name }) => {
  return (
    <S.Container>
      <Avatar />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};

export default ProfileCard;
