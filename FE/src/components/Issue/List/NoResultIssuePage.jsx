import React from 'react';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import styled from 'styled-components';

const NoResultIssuePage = () => {
  return (
    <ResultWrap>
      <ErrorOutlineOutlinedIcon fontSize="large" />
      <ResultContent>No results matched your search.</ResultContent>
    </ResultWrap>
  );
};

export default NoResultIssuePage;

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.gray};
`;

const ResultContent = styled.p`
  margin-top: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.color.darkGray};
`;
