import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';

import { addIssueInfo, deleteIssueInfo } from '@/actions/issueInfoAction';
import { useDispatch, useSelector } from 'react-redux';

const IssueInfoItem = ({ modal, list }) => {
  const { issueInfoReducer } = useSelector((state) => state);
  const { assignees, labels, milestone } = issueInfoReducer;

  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [iconColor, setIconColor] = useState('#586069');

  const infoItems = {
    label: (list) => {
      return (
        <ContentTitleWrap>
          <Check>{isChecked ? <CheckIcon style={{ color: iconColor, width: '20px' }} /> : ''}</Check>
          <LabelColor style={{ background: list.background }}></LabelColor>
          <LabelTitle className="labelTitle">{list.title}</LabelTitle>
        </ContentTitleWrap>
      );
    },
    assignee: (list) => {
      return (
        <ContentTitleWrap>
          <Check> {isChecked ? <CheckIcon style={{ color: iconColor, width: '20px' }} /> : ''}</Check>
          <UserImage src={list.user_image} />
          <UserName className="userName">{list.user_name}</UserName>
        </ContentTitleWrap>
      );
    },
    milestone: (list) => {
      return (
        <ContentTitleWrap>
          <Check> {isChecked ? <CheckIcon style={{ color: iconColor, width: '20px' }} /> : ''}</Check>
          <MilestoneTitle className="milestoneTitle">{list.title}</MilestoneTitle>
        </ContentTitleWrap>
      );
    }
  };

  const itemClickHandler = (modal, list) => {
    setIsChecked(!isChecked);
    if (!isChecked === false) dispatch(deleteIssueInfo(modal, list));
    if (!isChecked === true) dispatch(addIssueInfo(modal, list));
  };

  return (
    <>
      <Item
        onClick={() => itemClickHandler(modal, list)}
        onMouseOver={() => setIconColor('white')}
        onMouseLeave={() => setIconColor('#586069')}>
        {infoItems[modal](list)}
      </Item>
    </>
  );
};

export default IssueInfoItem;

const Item = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.listBorderColor};
  padding: 10px 10px;
  box-sizing: border-box;
  &:hover {
    background: ${({ theme }) => theme.mainBlueColor};
    cursor: pointer;

    span {
      color: white;
    }
  }
`;

const LabelColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  margin-right: 10px;
`;

const UserImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-right: 10px;
`;

const ContentTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
`;

const LabelTitle = styled.span`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: 13px;
`;

const MilestoneTitle = styled.span`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: ${({ theme }) => theme.fontSize.ragular};
  font-weight: 600;
`;

const Check = styled.div`
  width: 20px;
  height: 100%;
  margin-right: 10px;
  box-sizing: border-box;
`;
