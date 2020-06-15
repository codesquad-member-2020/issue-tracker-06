import React from 'react';
import styled from 'styled-components';

import LabelsMilestonesTap from '@/components/LabelsMilestonesTap/LabelsMilestonesTap';
import MilestoneDetail from '@/components/Milestones/MilestoneDetail/MilestoneDetail';
import MilestoneInfo from '@/components/Milestones/MilestoneInfo/MilestoneInfo';
import Header from '@/components/header/Header';

const Wrapper = styled.div`
  margin: auto;
  width: 1000px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainFontColor};
  margin-top: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewButton = styled.button`
  ${({ theme }) => theme.greenButton};
`;

const List = styled.ul`
  width: inherit;
  border: solid 1px ${({ theme }) => theme.listBorderColor};
  margin: 40px 0;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ListInfo = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  height: 53px;
  background: ${({ theme }) => theme.listBackground};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-sizing: border-box;
`;

const MilestoneCount = styled.span`
  font-weight: 600;
  font-size: 14px;
`;
const ListItemWrapper = styled.li`
  padding: 0 15px;
  box-sizing: border-box;
  border-top: solid 1px ${({ theme }) => theme.listBorderColor};
`;
const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 53px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Milestone = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ButtonWrapper>
          <LabelsMilestonesTap />
          <NewButton>New milestone</NewButton>
        </ButtonWrapper>

        <List>
          <ListInfo>
            <MilestoneCount>2 Open / 0 Closed</MilestoneCount>
          </ListInfo>
          <ListItemWrapper>
            <ListItem>
              <MilestoneDetail />
              <MilestoneInfo />
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <MilestoneDetail />
              <MilestoneInfo />
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <MilestoneDetail />
              <MilestoneInfo />
            </ListItem>
          </ListItemWrapper>
        </List>
      </Wrapper>
    </>
  );
};

export default Milestone;
