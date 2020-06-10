import React from 'react';
import styled from 'styled-components';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Header = () => {
  return (
    <HeaderWrap>
      <LibraryBooksIcon style={{ color: 'white', fontSize: 13 }} />
      <span>ISSUES</span>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  background: ${({ theme }) => theme.color.darkGray};
  text-align: center;
  > span {
    margin-left: 5px;
  }
`;
