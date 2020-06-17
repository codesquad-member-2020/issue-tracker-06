import React from 'react';
import Header from '@/components/header/Header';
import IssueDetailHeader from './IssueDetailHeader/IssueDetailHeader';
import IssueContent from './IssueContent/IssueContent';
import IssueWrite from './IssueWrite/IssueWrite';
import { useParams } from 'react-router-dom';

const IssueDetail = () => {
  const { issueId } = useParams();
  return (
    <>
      <Header />
      <IssueDetailHeader id={issueId} />
      <IssueContent />
      <IssueWrite />
    </>
  );
};

export default IssueDetail;
