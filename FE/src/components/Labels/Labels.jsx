import React from 'react';
import styled from 'styled-components';
import LabelsMilestonesTap from '@/components/LabelsMilestonesTap/LabelsMilestonesTap';
import NewLabel from '@/components/Labels/NewLabel/NewLabel';
import Header from '@/components/header/Header';

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
const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 53px;
  box-sizing: border-box;
`;

const LabelContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  box-sizing: border-box;
`;

const LabelWrapper = styled.div`
  width: 20%;
  box-sizing: border-box;
`;

const Label = styled.span`
  padding: 4px 8px;
  background: skyblue;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 600;
  color: ${({ theme }) => theme.darkFontColor};
  &:hover {
    text-decoration: underline;
  }
`;

const LabelContent = styled.span`
  width: 68%;
  font-size: 12px;
`;

const LabelButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9%;
  box-sizing: border-box;
`;

const LabelButton = styled.button`
  font-size: 12px;
  background: transparent;
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.mainFontColor};
  &:hover {
    color: ${({ theme }) => theme.mainBlueColor};
    text-decoration: underline;
  }
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

const Labels = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ButtonWrapper>
          <LabelsMilestonesTap />
          <NewButton>New label</NewButton>
        </ButtonWrapper>
        <NewLabelWrapper>
          <Label style={{ background: '#E8EA80' }}>Label preview</Label>
          <NewLabel />
        </NewLabelWrapper>
        <List>
          <ListInfo>
            <LabelCount>12 labels</LabelCount>
          </ListInfo>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label>FE</Label>
                </LabelWrapper>
                <LabelContent></LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label style={{ background: '#F87E6E' }}>BE</Label>
                </LabelWrapper>
                <LabelContent></LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label style={{ background: '#278AD2', color: 'white' }}>documentation</Label>
                </LabelWrapper>
                <LabelContent>improvements or additions to documentation</LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label style={{ background: '#8671FF', color: 'white' }}>good first issue</Label>
                </LabelWrapper>
                <LabelContent>Good for newcomers</LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label style={{ background: '#E8EA80' }}>invaild</Label>
                </LabelWrapper>
                <LabelContent>This doesn't seem right</LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
            <NewLabel />
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label style={{ background: '#DE8BE7' }}>question</Label>
                </LabelWrapper>
                <LabelContent>Further information is requested</LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label style={{ background: '#279988', color: 'white' }}>help wanted</Label>
                </LabelWrapper>
                <LabelContent>Extra attention is needed</LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItem>
              <LabelContentWrapper>
                <LabelWrapper>
                  <Label style={{ background: '#D6DADD' }}>duplicate</Label>
                </LabelWrapper>
                <LabelContent>This issue or pull request already exists</LabelContent>
                <LabelButtonWrapper>
                  <LabelButton>Edit</LabelButton>
                  <LabelButton>Delete</LabelButton>
                </LabelButtonWrapper>
              </LabelContentWrapper>
            </ListItem>
          </ListItemWrapper>
        </List>
      </Wrapper>
    </>
  );
};

export default Labels;
