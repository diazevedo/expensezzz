import React from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Switch from '../../components/Switch';

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
      <S.DownloadSection>
        <h4>PDF Report</h4>
        <p>Download monthly report</p>
        <Button />
      </S.DownloadSection>
      <S.DarkMode>
        <Switch label="light mode" />
      </S.DarkMode>
      <S.Footer>
        <p>© 2019 All Rights Reserved</p>
      </S.Footer>
    </S.Container>
  );
};

export default Sidebar;
