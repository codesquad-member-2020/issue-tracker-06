import React, { useState } from 'react';
import styled from 'styled-components';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useHistory } from 'react-router-dom';

const mockData = {
  title: '[FE] UI 만들기'
};

const IssueDetailHeader = ({ id }) => {
  const isOpen = false;
  const [titleEdit, setTitleEdit] = useState(false);
  const [changeTitle, setChangeTit] = useState(mockData.title);
  const history = useHistory();

  const handleChange = (e) => {
    setChangeTit(e.target.value);
  };

  const handleEdit = () => {
    setTitleEdit(true);
  };

  const handleCandel = () => {
    setChangeTit(mockData.title);
    setTitleEdit(false);
  };

  const handleSaveTitle = () => {
    setTitleEdit(false);
  };

  return (
    <HeaderWrap>
      <>
        {titleEdit ? (
          <div>
            <form>
              <TitleWrap>
                <TitleEditInput value={changeTitle} onChange={handleChange} type="text" />
                <div>
                  <SaveButton onClick={handleSaveTitle}>Save</SaveButton>
                  <CancelButton onClick={handleCandel}>Cancel</CancelButton>
                </div>
              </TitleWrap>
            </form>
          </div>
        ) : (
          <TitleWrap>
            <Title>
              {changeTitle} <span>#{id}</span>
            </Title>
            <div>
              <EditButton onClick={handleEdit}>Edit</EditButton>
              <NewIssueButton onClick={() => history.push('/newIssue')}>New issue</NewIssueButton>
            </div>
          </TitleWrap>
        )}
      </>
      <IssueInfoWrap>
        {isOpen ? (
          <LabelOpen>
            <ErrorOutlineIcon style={{ fontSize: 20, verticalAlign: 'middle', marginRight: '2px' }} />
            Open
          </LabelOpen>
        ) : (
          <LabelClose>
            <CheckCircleOutlineIcon style={{ fontSize: 20, verticalAlign: 'middle', marginRight: '2px' }} />
            Closed
          </LabelClose>
        )}
        <IssueInfo>
          <Writer>{'beemiel'}</Writer> opened this issue {'8 days ago'} · {0} comments
        </IssueInfo>
      </IssueInfoWrap>
    </HeaderWrap>
  );
};

export default IssueDetailHeader;

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.darkGray};
  > span {
    font-size: inherit;
    color: ${({ theme }) => theme.color.gray};
  }
`;

const TitleEditInput = styled.input`
  ${({ theme }) => theme.input};
  width: 85%;
  height: 35px;
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.ragular};
`;

const SaveButton = styled.button`
  ${({ theme }) => theme.greyButton};
`;

const CancelButton = styled.button`
  color: ${({ theme }) => theme.mainBlueColor};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Label = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  font-weight: bold;
`;

const IssueInfoWrap = styled(TitleWrap)`
  margin-bottom: 0;
  justify-content: flex-start;
`;

const LabelOpen = styled(Label)`
  background: ${({ theme }) => theme.color.green};
`;

const LabelClose = styled(Label)`
  background: ${({ theme }) => theme.color.red};
`;

const IssueInfo = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const Writer = styled.span`
  font-weight: bold;
`;

const EditButton = styled.button`
  ${({ theme }) => theme.greyButton};
  padding: 5px 8px;
  font-size: 13px;
  font-weight: bold;
`;

const NewIssueButton = styled.button`
  ${({ theme }) => theme.greenButton};
  margin-left: 5px;
  padding: 5px 8px;
  font-size: 13px;
  font-weight: bold;
`;
