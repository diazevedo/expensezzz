import React from 'react';

import ProfileCard from '../../components/ProfileCard';

import * as S from './styles';

const Header = ({ title }) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.ContainerAvatarNotification>
        <S.Notification />
        <ProfileCard name="Ingredia Nutrisha" />
      </S.ContainerAvatarNotification>
    </S.Container>
  );
};

export default Header;
