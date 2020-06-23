import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
  display: flex;
  justify-content: Center;
  align-items: center;
  width: 100%;
  height: 800px;
`;
const LoginButton = styled.button`
  width: 100px;
  height: 50px;
  background: grey;
  color: white;
`;
const Main = () => {
  const loginClickHandler = () => {
    window.location.href = process.env.LOGIN;
  };
  return (
    <Wrap>
      <LoginButton onClick={loginClickHandler}>깃헙으로 로그인</LoginButton>
    </Wrap>
  );
};

export default Main;
