import React from 'react';
import styled from 'styled-components';

import LabelsMilestonesTap from '@/components/LabelsMilestonesTap/LabelsMilestonesTap';

const Wrapper = styled.div`
  margin: auto;
  width: 1000px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainFontColor};
`;

const PageTitleWrapper = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.listBorderColor};
  padding-bottom: 25px;
`;

const PageTitle = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.darkFontColor};
  margin-bottom: 10px;
`;

const PageTitleContent = styled.div`
  font-size: 14px;
  span {
    color: ${({ theme }) => theme.mainBlueColor};
  }
`;

const NewMilestoneContentWrapper = styled.div`
  padding-bottom: 15px;
  border-bottom: solid 1px ${({ theme }) => theme.listBorderColor};
`;

const InputWrapper = styled.div`
  margin-top: 25px;
  margin-right: 15px;
`;

const InputTitle = styled.div`
  color: ${({ theme }) => theme.darkFontColor};
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  ${({ theme }) => theme.input};
  width: 450px;
`;

const Description = styled.textarea`
  ${({ theme }) => theme.input};
  max-width: 650px;
  width: 650px;
  min-height: 250px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
`;

const CreatButton = styled.button`
  ${({ theme }) => theme.greenButton};
`;

const NewMilestone = () => {
  return (
    <Wrapper>
      <PageTitleWrapper>
        {/* <LabelsMilestonesTap /> */}

        <PageTitle>New milestone</PageTitle>
        <PageTitleContent>
          Create a new milestone to help organize your issues and pull requests. Learn more about{' '}
          <span>milestones and issues</span>.
        </PageTitleContent>
      </PageTitleWrapper>
      <NewMilestoneContentWrapper>
        <InputWrapper>
          <InputTitle>Title</InputTitle>
          <Input placeholder="Title" />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Due date (optional)</InputTitle>
          <Input defaultValue="연도. 월. 일" />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Description</InputTitle>
          <Description />
        </InputWrapper>
      </NewMilestoneContentWrapper>
      <ButtonWrapper>
        <CreatButton>Create milestone</CreatButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NewMilestone;
