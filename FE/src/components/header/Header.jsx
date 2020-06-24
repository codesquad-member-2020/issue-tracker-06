import React from 'react';
import styled from 'styled-components';
import whiteLogo from '@/image/whiteLogo.png';
import { getCookie } from '@/lib/util/cookie';
import { useHistory } from 'react-router-dom';

const userInfo = {
  id: getCookie('user_name'),
  url: getCookie('user_profile')
};

const Header = () => {
  const history = useHistory();

  const logoClickHandler = () => {
    userInfo.id === '' || !userInfo.id ? history.push('/') : history.push('/issueList');
  };

  return (
    <HeaderWrap>
      <LogoWrap onClick={logoClickHandler}>
        <Logo src={whiteLogo} />
        <span>ISSUES</span>
      </LogoWrap>
      {userInfo.id === '' || !userInfo.id ? (
        ''
      ) : (
        <UserInfoWrap>
          <UserImage src={userInfo.url} />
          <span>{userInfo.id}</span>
        </UserInfoWrap>
      )}
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  background: #24292e;
  > span {
    margin-left: 5px;
    font-size: 15px;
  }
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  > span {
    margin-left: 5px;
    font-size: 15px;
  }
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const UserInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border-radius: 15px;
  background: white;
  > span {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;
const UserImage = styled.img`
  width: 30px;
  border-radius: 30px;
  margin-right: 10px;
`;
