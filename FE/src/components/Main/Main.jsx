import React from 'react';
import styled from 'styled-components';
import Header from '@/components/header/Header';
import logo from '@/image/logo.png';
import nameLogo from '@/image/nameLogo.png';
import backgroundImage from '@/image/backgroundImage.png';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
  width: 100%;
  height: 630px;
  background: url('backgroundImage.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginWrap = styled.div`
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
`;
const LoginMessage = styled.div`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  margin: 10px 0px 50px 0px;
  font-family: 'GmarketSansLight';
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const InputTitle = styled.span`
  margin: 10px 0px;
  color: ${({ theme }) => theme.mainFontColor};
  font-weight: 600;
`;
const Input = styled.input`
  ${({ theme }) => theme.input};
  width: 300px;
  height: 35px;
`;
const LoginButton = styled.button`
  ${({ theme }) => theme.greenButton};
  width: 300px;
  height: 50px;
  margin: 25px 0px 0px 0px;
  font-size: 15px;
`;

const GitLoginButton = styled.button`
  ${({ theme }) => theme.greyButton};
  width: 300px;
  height: 50px;
  margin: 12px 0px;
  display: flex;
  font-size: 15px;
  color: ${({ theme }) => theme.color.darkgray};
  justify-content: center;
  align-items: center;
  > span {
    margin: 0px 3px;
  }
`;

const GitLogoImage = styled.img`
  width: 35px;
`;
const GitLogo = styled.img`
  height: 25px;
`;

const Main = () => {
  const loginClickHandler = () => {
    window.location.href = process.env.LOGIN;
  };

  return (
    <>
      <Header />
      <Wrap>
        <LoginWrap>
          <LoginMessage>Sign in to Issues</LoginMessage>
          <InputWrap>
            <InputTitle>Username or email address</InputTitle>
            <Input />
          </InputWrap>
          <InputWrap>
            <InputTitle>Password</InputTitle>
            <Input type="password" />
          </InputWrap>
          <LoginButton>Sign in</LoginButton>
          <GitLoginButton onClick={loginClickHandler}>
            <GitLogoImage src="logo.png" />
            <span>Login with</span>
            <GitLogo src="nameLogo.png" />
          </GitLoginButton>
        </LoginWrap>
      </Wrap>
    </>
  );
};

export default Main;
