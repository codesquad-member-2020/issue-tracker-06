import React from 'react';
import Header from '@/components/header/Header';
import Wrap from '@/components/Layout/Wrap';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const userInfo = {
  id: '@hyewon3938',
  url: 'https://avatars1.githubusercontent.com/u/58355499?s=40&v=4'
};

const NewIssue = () => {
  return (
    <>
      <Header />
      <Wrap>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <ImgWrap>
              <img src={userInfo.url} />
            </ImgWrap>
          </Grid>
          <Grid item xs={8}>
            <div>
              <div>
                <input type="text" />
              </div>
              <div>
                <span>Write</span>
                <div>
                  <textarea />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            사이드메뉴
          </Grid>
        </Grid>
      </Wrap>
    </>
  );
};

export default NewIssue;

const ImgWrap = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  > img {
    width: 100%;
    height: 100%;
  }
`;
