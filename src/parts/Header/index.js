import React from 'react';

import ProfileCard from '../../components/ProfileCard';

import * as S from './styles';

const Header = ({ title, handleCheckbox }) => {
  const checkboxRef = React.useRef();

  const [menuOpened, setMenuOpened] = React.useState(false);

  const handleCheckboxClick = (isChecked) => {
    setMenuOpened(isChecked);
    handleCheckbox(isChecked);
  };

  return (
    <S.Container>
      <S.MenuBurger isMenuOpened={menuOpened}>
        <S.MenuControl
          ref={checkboxRef}
          onClick={() => handleCheckboxClick(checkboxRef.current.checked)}
        />
        <S.Span isMenuOpened={menuOpened} />
      </S.MenuBurger>
      <h1>{title}</h1>
      <S.ContainerAvatarNotification>
        <S.Notification />
        <ProfileCard name="Ingredia Nutrisha" />
      </S.ContainerAvatarNotification>
    </S.Container>
  );
};

export default Header;
