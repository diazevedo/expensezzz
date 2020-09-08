import React from 'react';

import Card from '../../components/Card';
import * as S from './styles';

import items from '../../utils/data/navigationItems';

const Sidebar = () => {
  return (
    <S.Container>
      <Card value="$16,756.00" />
      <S.MenuContainer>
        <S.MenuList>
          {items.map(({ url, alt, label, image }) => (
            <S.ListItem key={label}>
              <S.Link to={url}>
                <S.Icon src={image} alt={alt} />
                <span>{label}</span>
              </S.Link>
            </S.ListItem>
          ))}
        </S.MenuList>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Sidebar;
