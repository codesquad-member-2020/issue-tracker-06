import React from 'react';
import styled from 'styled-components';
import Header from '@/components/header/Header';
import '@/image/logo.png';
import '@/image/nameLogo.png';
import '@/image/backgroundImage.png';

const Wrap = styled.div`
  display: flex;
  justify-content: Center;
  align-items: center;
  width: 100%;
  height: 630px;
  background: url('backgroundImage.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const ContentWrap = styled.div`
  width: 450px;
  margin-right: 50px;
`;
const ContentTitle = styled.div`
  font-size: 55px;
  line-height: 60px;
  color: white;
  font-weight: 600;
  margin-bottom: 25px;
`;
const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: #a7aaac;
  line-height: 30px;
`;

const Attributor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #6d6c6f;
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 10px;
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
        <ContentWrap>
          <Attributor>@Ari @Joy @Lynn</Attributor>
          <ContentTitle>
            Built for developers, <br />
            Issue Tracker
          </ContentTitle>
          <Content>
            Issue Tracker is a development platform inspired by the way you work and Built for developers. you can
            manage projects with using issue, milestone, label
          </Content>
        </ContentWrap>
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
