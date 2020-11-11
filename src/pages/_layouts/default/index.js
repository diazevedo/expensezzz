import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Sidebar from '../../../parts/Sidebar';
import Header from '../../../parts/Header';
import ContainerMain from '../../../components/ContainerMain';

import * as S from './styles';

const DefaultLayout = ({ children }) => {
  let location = useLocation();
  const [menuOpened, setMenuOpened] = React.useState(false);

  return (
    <S.Wrapper>
      <Sidebar menuOpened={menuOpened} />
      <ContainerMain>
        <Header
          title={location.pathname.replace('/', '')}
          handleCheckbox={setMenuOpened}
        />
        {children}
      </ContainerMain>
    </S.Wrapper>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
