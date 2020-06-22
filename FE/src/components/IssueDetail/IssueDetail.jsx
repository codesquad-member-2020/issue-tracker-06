import React from 'react';
import styled from 'styled-components';
import Header from '@/components/header/Header';
import IssueDetailHeader from './IssueDetailHeader/IssueDetailHeader';
import IssueContent from './IssueContent/IssueContent';
import IssueWrite from './IssueWrite/IssueWrite';
import Wrap from '@/components/Layout/Wrap';
import IssueInfo from '@/components/IssueInfo/IssueInfo';

const mockData = {
  author: 'kiyoesjh',
  content: 'ui 만들기',
  imgUrl: 'https://avatars1.githubusercontent.com/u/58324414?s=40&v=4',
  comments: [
    {
      user: 'hyewon3938',
      content: 'label 만들기',
      imgUrl: 'https://avatars1.githubusercontent.com/u/58355499?s=40&v=4'
    }
  ]
};

const IssueDetail = ({ match }) => {
  return (
    <>
      <Header />
      <IssueDetailHeader id={match.params.issueId} />
      <Wrap>
        <FlexLayout>
          <IssueWrap>
            <div>
              <IssueContent data={mockData} author={true} />
              {mockData.comments.map((comment) => (
                <IssueContent data={comment} key={comment.user + comment.content} author={false} />
              ))}
            </div>
            <IssueWrite data={mockData} />
          </IssueWrap>
          <IssueInfoWrap>
            <IssueInfo />
          </IssueInfoWrap>
        </FlexLayout>
      </Wrap>
    </>
  );
};

export default IssueDetail;

const FlexLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const IssueWrap = styled.div`
  width: 85%;
`;

const IssueInfoWrap = styled.div``;
