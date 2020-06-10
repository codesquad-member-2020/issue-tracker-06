import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 40%;
  padding: 23px 0;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  background: #eaecef;
  width: 90%;
  height: 12px;
  border-radius: 4px;
`;
const ProgressBar = styled.div`
  position: absolute;
  width: 83%;
  height: 100%;
  background: #2cbe4e;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
const ProgressInfoWrapper = styled.div`
  display: flex;
  margin-top: 13px;
  font-size: 14px;
`;

const ProgressInfo = styled.div`
  margin-right: 17px;
  display: flex;
`;
const ProgressValue = styled.div`
  font-weight: 600;
  margin-right: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9%;
  box-sizing: border-box;
  margin-top: 15px;
`;

const Button = styled.div`
  font-size: 14px;
  background: transparent;
  margin-right: 12px;
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.mainBlueColor};
  &:hover {
    text-decoration: underline;
  }
`;

const MilestoneInfo = () => {
  return (
    <Wrapper>
      <ProgressBarWrapper>
        <ProgressBar></ProgressBar>
      </ProgressBarWrapper>
      <ProgressInfoWrapper>
        <ProgressInfo>
          <ProgressValue>83%</ProgressValue> complete
        </ProgressInfo>
        <ProgressInfo>
          <ProgressValue>1 </ProgressValue>open
        </ProgressInfo>
        <ProgressInfo>
          <ProgressValue>5 </ProgressValue>closed
        </ProgressInfo>
      </ProgressInfoWrapper>
      <ButtonWrapper>
        <Button>Edit</Button>
        <Button>Close</Button>
        <Button style={{ color: '#D5246D' }}>Delete</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MilestoneInfo;
