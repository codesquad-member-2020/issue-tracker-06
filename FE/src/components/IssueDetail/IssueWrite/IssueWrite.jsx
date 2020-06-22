import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const IssueWrite = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ImgWrap>
          <img src={data.imgUrl} />
        </ImgWrap>
      </Grid>
      <Grid item xs={10}>
        <CommentButtonWrap>
          <WriteTabButton>Write</WriteTabButton>
        </CommentButtonWrap>
        <CommentInputWrap>
          <CommentInput placeholder="Leave a comment" />
          <ButtonWrap>
            <CloseIssueButton>Close issue</CloseIssueButton>
            <SubmitButton>Comment</SubmitButton>
          </ButtonWrap>
        </CommentInputWrap>
      </Grid>
    </Grid>
  );
};

export default IssueWrite;

// const CommentWrap = styled.div`
//   padding-top: 5px;
// `;

const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

const CommentButtonWrap = styled.div`
  position: relative;
  padding: 10px 10px 0;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  background: ${({ theme }) => theme.color.lightestGray};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  &:before {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    margin-top: -5px;
    left: -6px;
    border-top: 1px solid #d1d5da;
    border-left: 1px solid #d1d5da;
    transform: rotate(-45deg);
    background-color: ${({ theme }) => theme.color.lightestGray};
    content: '';
  }
`;

const WriteTabButton = styled.button`
  padding: 8px 20px;
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
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-top: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const CommentInput = styled.textarea`
  ${({ theme }) => theme.input};
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 100px;
  max-height: 400px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  padding-top: 10px;
`;

const SubmitButton = styled.button`
  ${({ theme }) => theme.greenButton};
  margin-left: 5px;
`;

const CloseIssueButton = styled.button`
  ${({ theme }) => theme.greyButton};
`;
