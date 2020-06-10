import React from 'react';
import styled from 'styled-components';

const Wrap = ({ children }) => {
  return <WrapStyle>{children}</WrapStyle>;
};

export default Wrap;

const WrapStyle = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 50px auto;
`;
