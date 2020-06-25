import React from 'react';
import Header from '@/components/header/Header';
import Wrap from '@/components/Layout/Wrap';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import IssueInfo from '@/components/IssueInfo/IssueInfo';
import { getCookie } from '@/lib/util/cookie';
import { submitNewIssue } from '@/actions/newIssueAction';
import { useDispatch } from 'react-redux';

const userInfo = {
  id: getCookie('user_name'),
  url: getCookie('user_profile')
};

const NewIssue = () => {
  const dispatch = useDispatch();
  let titleValue = React.createRef();
  let contentValue = React.createRef();

  const submitClickHandler = () => {
    dispatch(submitNewIssue({ title: titleValue.current.value, content: contentValue.current.value }));
  };
  return (
    <>
      <Header />
      <Wrap>
        <Grid container spacing={2}>
          <Grid item>
            <ImgWrap>
              <img src={userInfo.url} />
            </ImgWrap>
          </Grid>
          <GridFromWrap item xs={8}>
            <FormWrap>
              <TitileInputWrap>
                <TitleInput type="text" placeholder="Title" ref={titleValue} />
              </TitileInputWrap>
              <CommentWrap>
                <CommentButtonWrap>
                  <WriteTabButton>Write</WriteTabButton>
                </CommentButtonWrap>
                <CommentInputWrap>
                  <CommentInput placeholder="Leave a comment" ref={contentValue} />
                </CommentInputWrap>
                <ButtonWrap>
                  <button>Cancel</button>
                  <SubmitButton onClick={submitClickHandler}>Submit new issue</SubmitButton>
                </ButtonWrap>
              </CommentWrap>
            </FormWrap>
          </GridFromWrap>
          <Grid item xs={2}>
            <IssueInfo />
          </Grid>
        </Grid>
      </Wrap>
    </>
  );
};

export default NewIssue;

const GridFromWrap = styled(Grid)`
  position: relative;
  &:before {
    position: absolute;
    top: 20px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-top: 1px solid ${({ theme }) => theme.color.lightGray};
    border-left: 1px solid ${({ theme }) => theme.color.lightGray};
    transform: rotate(-45deg);
    background: ${({ theme }) => theme.color.white};
    content: '';
  }
`;

const FormWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
`;

const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

const TitileInputWrap = styled.div`
  padding: 10px;
`;

const TitleInput = styled.input`
  ${({ theme }) => theme.input};
  background: ${({ theme }) => theme.color.base};
  height: 35px;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize.ragular};
`;

const CommentWrap = styled.div`
  padding-top: 5px;
`;

const CommentButtonWrap = styled.div`
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const WriteTabButton = styled.button`
  padding: 10px;
  width: 80px;
  height: 40px;
  margin-bottom: -1px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-bottom: 0;
  background: ${({ theme }) => theme.color.white};
`;

const CommentInputWrap = styled.div`
  padding: 10px;
`;

const CommentInput = styled.textarea`
  ${({ theme }) => theme.input};
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 300px;
  max-height: 400px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  padding: 0 10px 10px;
`;

const SubmitButton = styled.button`
  ${({ theme }) => theme.greenButton}
`;
