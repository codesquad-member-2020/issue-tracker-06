import React, { useState } from 'react';
import styled from 'styled-components';
import NewLabel from '@/components/Labels/NewLabel/NewLabel';

const LabelItem = ({ data }) => {
  const { title, background, color, description } = data;
  const [editLabelVisible, setEditLabelVisible] = useState(false);

  const editClickHandler = () => {
    setEditLabelVisible(!editLabelVisible);
  };

  const editCancelClickHandler = (type) => {
    if (type === 'edit') setEditLabelVisible(false);
  };

  return (
    <>
      <ListItem>
        <LabelContentWrapper>
          <LabelWrapper>
            <Label style={{ background: background, color: color }}>{title}</Label>
          </LabelWrapper>
          <LabelContent>{description}</LabelContent>
          <LabelButtonWrapper>
            <LabelButton onClick={editClickHandler}>Edit</LabelButton>
            <LabelButton>Delete</LabelButton>
          </LabelButtonWrapper>
        </LabelContentWrapper>
      </ListItem>
      {editLabelVisible ? <NewLabel type="edit" cancelClickHandler={editCancelClickHandler} data={data} /> : ''}
    </>
  );
};

export default LabelItem;

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
