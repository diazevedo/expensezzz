import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../../parts/Sidebar';

import * as S from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <S.Wrapper>
      {/* <Header /> */}
      <Sidebar />
      {children}
    </S.Wrapper>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
