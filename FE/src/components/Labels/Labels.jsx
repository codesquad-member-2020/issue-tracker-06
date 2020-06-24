import React, { useState } from 'react';
import styled from 'styled-components';
import LabelsMilestonesTap from '@/components/LabelsMilestonesTap/LabelsMilestonesTap';
import NewLabel from '@/components/Labels/NewLabel/NewLabel';
import Header from '@/components/header/Header';
import LabelItem from '@/components/Labels/LabelItem/LabelItem';

const labelList = [
  { title: 'FE', background: '#B48CFE', color: '#000000', description: 'FE Issue' },
  { title: 'BE', background: '#F76B4D', color: '#000000', description: 'BE Issue' },
  { title: 'feature', background: '#2F2FDE', color: '#FFFFFF', description: '' },
  { title: 'scrum', background: '#559434', color: '#FFFFFF', description: '' },
  {
    title: 'documentation',
    background: '#EED85D',
    color: '#000000',
    description: 'improvements or additions to documentation'
  },
  { title: 'good first issue', background: '#EAC2DA', color: '#000000', description: 'Good for newcomers' },
  { title: 'invalid', background: '#DE8BE7', color: '#000000', description: "This doesn't seem right" },
  { title: 'question', background: '#5B9EAD', color: '#FFFFFF', description: 'Further information is requested' },
  { title: 'help wanted', background: '#279988', color: '#FFFFFF', description: 'Extra attention is needed' },
  {
    title: 'duplicate',
    background: '#D6DADD',
    color: '#000000',
    description: 'This issue or pull request already exists'
  }
];

const Labels = () => {
  const [newLabelVisible, setNewLabelVisible] = useState(false);

  const newLabelClickHandler = () => {
    setNewLabelVisible(!newLabelVisible);
  };

  const newLabelCencelClickHandler = (type) => {
    if (type === 'new') setNewLabelVisible(false);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <ButtonWrapper>
          <LabelsMilestonesTap />
          <NewButton onClick={newLabelClickHandler}>New label</NewButton>
        </ButtonWrapper>
        {newLabelVisible ? (
          <NewLabelWrapper>
            <Label style={{ background: '#E8EA80' }}>Label preview</Label>
            <NewLabel type="new" cancelClickHandler={newLabelCencelClickHandler} data={''} />
          </NewLabelWrapper>
        ) : (
          ''
        )}
        <List>
          <ListInfo>
            <LabelCount>{labelList.length} labels</LabelCount>
          </ListInfo>
          {labelList.map((list, index) => {
            return (
              <ListItemWrapper key={index}>
                <LabelItem key={index} data={list} cancelClickHandler={newLabelCencelClickHandler} />
              </ListItemWrapper>
            );
          })}
        </List>
      </Wrapper>
    </>
  );
};

export default Labels;

const Wrapper = styled.div`
  margin: auto;
  width: 1000px;
  box-sizing: border-box;
  margin-top: 50px;
  color: ${({ theme }) => theme.mainFontColor};
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

const LabelCount = styled.span`
  font-weight: 600;
  font-size: 14px;
`;
const ListItemWrapper = styled.li`
  padding: 0 15px;
  box-sizing: border-box;
  border-top: solid 1px ${({ theme }) => theme.listBorderColor};
`;

const NewLabelWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  background: ${({ theme }) => theme.listBackground};
  border: solid 1px ${({ theme }) => theme.listBorderColor};
  border-radius: 3px;
  box-sizing: border-box;
  padding: 25px 15px 0px 15px;
`;

const Label = styled.span`
  padding: 5px 8px;
  background: skyblue;
  font-size: 14px;
  border-radius: 3px;
  font-weight: 600;
  color: ${({ theme }) => theme.darkFontColor};
  &:hover {
    text-decoration: underline;
  }
`;
