import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.mainFontColor};
  padding: 23px 0;
  width: 55%;
`;

const Title = styled.div`
  font-size: 26px;
  color: ${({ theme }) => theme.darkFontColor};
`;

const TimeInfoWrapper = styled.div`
  display: flex;
  margin-top: 13px;
`;
const TimeInfo = styled.div`
  margin-right: 10px;
  font-size: 14px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  line-height: 22px;
  font-size: 15px;
`;

const MilestoneDetail = () => {
  return (
    <Wrapper>
      <Title>[FE] 1주차</Title>
      <TimeInfoWrapper>
        <TimeInfo>Due by June 13, 2020</TimeInfo>
        <TimeInfo>Last updated about 10 hours ago</TimeInfo>
      </TimeInfoWrapper>
      <Content>
        개발환경 구성, 컴포넌트 설계, 라우팅, UI구현, 이슈 목록 화면개발환경 구성, 컴포넌트 설계, 라우팅, UI구현, 이슈
        목록 화면
      </Content>
    </Wrapper>
  );
};

export default MilestoneDetail;
