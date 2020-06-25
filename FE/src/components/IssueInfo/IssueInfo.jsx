import React, { useState } from 'react';
import styled from 'styled-components';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import IssueInfoModal from '@/components/IssueInfo/IssueInfoModal/IssueInfoModal';
import { useSelector } from 'react-redux';
import { getCookie } from '@/lib/util/cookie';
import { addIssueInfo } from '@/actions/issueInfoAction';
import { useDispatch } from 'react-redux';

const IssueInfo = () => {
  const dispatch = useDispatch();
  const [assigneesVisible, setAssigneesVisible] = useState(false);
  const [labelsVisible, setLabelsVisible] = useState(false);
  const [milestoneVisible, setMilestoneVisible] = useState(false);
  const [infoList, setInfoList] = useState();

  const { issueInfoReducer } = useSelector((state) => state);
  const { assignees, labels, milestone } = issueInfoReducer;

  const labelList = [
    { title: 'BE', background: '#F76B4D', color: 'black' },
    { title: 'FE', background: '#B48CFE', color: 'black' },
    { title: 'feature', background: '#2F2FDE', color: 'white' }
  ];
  const milestoneList = [{ title: '[BE]1주차' }, { title: '[BE]2주차' }, { title: '[FE]1주차' }];
  const assigneeList = [
    { user_id: 1, user_name: 'hyewon3938', user_image: 'https://avatars1.githubusercontent.com/u/58355499?s=120&v=4' },
    { user_id: 2, user_name: 'kiyoesjh', user_image: 'https://avatars0.githubusercontent.com/u/58324414?s=120&v=4' },
    { user_id: 3, user_name: 'beemiel', user_image: 'https://avatars0.githubusercontent.com/u/58145890?s=120&v=4' }
  ];

  const userInfo = {
    name: getCookie('user_name'),
    url: getCookie('user_profile'),
    id: getCookie('user_id')
  };

  const infoClick = {
    assignees: () => {
      setAssigneesVisible(!assigneesVisible);
      setLabelsVisible(false);
      setMilestoneVisible(false);
      setInfoList(assigneeList);
    },
    labels: () => {
      setAssigneesVisible(false);
      setLabelsVisible(!labelsVisible);
      setMilestoneVisible(false);
      setInfoList(labelList);
    },
    milestone: () => {
      setAssigneesVisible(false);
      setLabelsVisible(false);
      setMilestoneVisible(!milestoneVisible);
      setInfoList(milestoneList);
    },
    closeAll: () => {
      setAssigneesVisible(false);
      setLabelsVisible(false);
      setMilestoneVisible(false);
    }
  };

  const infoClickHandler = () => {};

  const assignYourselfClickHandler = () => {
    dispatch(
      addIssueInfo('assignee', { name: userInfo.name, user_id: userInfo.id, profile_image: userInfo.url }, true)
    );
  };

  return (
    <>
      <Wrap>
        <InfoItemWrap>
          <TitleButtonWrap
            onClick={() => {
              infoClick.assignees();
            }}>
            <Title>Assignees</Title>
            <SettingButton>
              <Brightness5OutlinedIcon fontSize="small" style={{ color: 'grey' }} />
            </SettingButton>
          </TitleButtonWrap>
          <div style={assigneesVisible ? { display: 'flex' } : { display: 'none' }}>
            <IssueInfoModal modal="assignee" infoList={infoList} />
          </div>
          <Content>
            {assignees.length === 0 ? (
              <div>
                No one — <span onClick={assignYourselfClickHandler}>assign yourself</span>
              </div>
            ) : (
              assignees.map((list, index) => {
                return (
                  <Item key={index}>
                    <ContentTitleWrap>
                      <UserImage src={list.user_image} />
                      <UserName>{list.user_name}</UserName>
                    </ContentTitleWrap>
                  </Item>
                );
              })
            )}
          </Content>
        </InfoItemWrap>
        <InfoItemWrap>
          <TitleButtonWrap
            onClick={() => {
              infoClick.labels();
            }}>
            <Title>Labels</Title>
            <SettingButton>
              <Brightness5OutlinedIcon fontSize="small" style={{ color: 'grey' }} />
            </SettingButton>
          </TitleButtonWrap>
          <div style={labelsVisible ? { display: 'flex' } : { display: 'none' }}>
            <IssueInfoModal modal="label" infoList={infoList} />
          </div>
          <Content>
            {labels.length === 0 ? (
              <div>None yet</div>
            ) : (
              labels.map((list, index) => {
                return (
                  <Item key={index}>
                    <ContentTitleWrap>
                      <LabelTitle style={{ background: list.background, color: list.color }}>{list.title}</LabelTitle>
                    </ContentTitleWrap>
                  </Item>
                );
              })
            )}
          </Content>
        </InfoItemWrap>
        <InfoItemWrap>
          <TitleButtonWrap
            onClick={() => {
              infoClick.milestone();
            }}>
            <Title>Milestone</Title>
            <SettingButton>
              <Brightness5OutlinedIcon fontSize="small" style={{ color: 'grey' }} />
            </SettingButton>
          </TitleButtonWrap>
          <div style={milestoneVisible ? { display: 'flex' } : { display: 'none' }}>
            <IssueInfoModal modal="milestone" infoList={infoList} />
          </div>
          <Content>
            {milestone === '' ? (
              <div>None yet</div>
            ) : (
              <Item>
                <ContentTitleWrap>
                  <MilestoneTitle>{milestone.title}</MilestoneTitle>
                </ContentTitleWrap>
              </Item>
            )}
          </Content>
        </InfoItemWrap>
      </Wrap>
    </>
  );
};

export default IssueInfo;

const Wrap = styled.div`
  width: 220px;
  margin: 20px 0 0 15px;
  box-sizing: border-box;
`;

const InfoItemWrap = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  padding-bottom: 20px;
  margin-top: 20px;
  position: relative;
`;

const TitleButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #848484;
  &:hover {
    color: ${({ theme }) => theme.mainBlueColor};
    cursor: pointer;
  }
`;

const Content = styled.div`
  font-size: 13px;
  color: #848484;
  span {
    font-size: ${({ theme }) => theme.fontSize.base};
    :hover {
      color: ${({ theme }) => theme.mainBlueColor};
      cursor: pointer;
    }
  }
`;

const SettingButton = styled.button`
  outline: 0;
  border: 0;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ContentTitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
`;

const UserImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-right: 10px;
`;

const LabelTitle = styled.span`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: 13px;
  width: 100%;
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 2px;
`;

const MilestoneTitle = styled.span`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: ${({ theme }) => theme.fontSize.ragular};
  font-weight: 600;
`;
