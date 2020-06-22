import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const IssueContent = ({ data, author }) => {
  const authorClassName = author ? 'author' : '';

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <ImgWrap>
            <img src={data.imgUrl} />
          </ImgWrap>
        </Grid>
        <IssueCommentWrap item xs={10}>
          <ContentHead className={authorClassName}>
            <Link to={'/'}>{author ? data.author : data.user}</Link> commented 10 days ago
          </ContentHead>
          <ContentWrap className={authorClassName}>{data.content}</ContentWrap>
        </IssueCommentWrap>
      </Grid>
    </div>
  );
};

export default IssueContent;

const IssueCommentWrap = styled(Grid)`
  padding-left: 15px;
`;

const ContentHead = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5da;
  background-color: ${({ theme }) => theme.color.lightestGray};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  &.author {
    background-color: ${({ theme }) => theme.color.lightBlue};
    border-color: ${({ theme }) => theme.color.lightBlueBorder};
  }

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
  &.author:before {
    background-color: ${({ theme }) => theme.color.lightBlue};
    border-color: ${({ theme }) => theme.color.lightBlueBorder};
  }
`;

const ContentWrap = styled.div`
  padding: 10px;
  border: 1px solid #d1d5da;
  border-top: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  &.author {
    border-color: ${({ theme }) => theme.color.lightBlueBorder};
  }
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
