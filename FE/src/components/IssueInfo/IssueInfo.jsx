import React from 'react';
import styled from 'styled-components';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const Wrap = styled.div`
  width: 280px;
  margin: 20px 0 0 15px;
  box-sizing: border-box;
`;

const InfoItemWrap = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  padding-bottom: 20px;
  margin-top: 20px;
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
  }
`;

const Content = styled.div`
  font-size: 13px;
  color: #848484;
  span {
    font-size: ${({ theme }) => theme.fontSize.base};
    :hover {
      color: ${({ theme }) => theme.mainBlueColor};
    }
  }
`;

const SettingButton = styled.button`
  outline: 0;
  border: 0;
`;
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const IssueInfo = () => {
  return (
    <>
      <Wrap>
        <InfoItemWrap>
          <TitleButtonWrap>
            <Title>Assignees</Title>
            <SettingButton>
              <Brightness5OutlinedIcon fontSize="small" style={{ color: 'gray' }} />
            </SettingButton>
          </TitleButtonWrap>
          <Content>
            No one — <span>assign yourself</span>
          </Content>
        </InfoItemWrap>
        <InfoItemWrap>
          <TitleButtonWrap>
            <Title>Labels</Title>
            <SettingButton>
              <Brightness5OutlinedIcon fontSize="small" style={{ color: 'gray' }} />
            </SettingButton>
          </TitleButtonWrap>
          <Content>None yet</Content>
        </InfoItemWrap>
        <InfoItemWrap>
          <TitleButtonWrap>
            <Title>Milestone</Title>
            <SettingButton>
              <Brightness5OutlinedIcon fontSize="small" style={{ color: 'gray' }} />
            </SettingButton>
          </TitleButtonWrap>
          <Content>None yet</Content>
        </InfoItemWrap>
      </Wrap>
    </>
  );
};

export default IssueInfo;
