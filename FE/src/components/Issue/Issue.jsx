import React from 'react';
import styled from 'styled-components';
import Wrap from '@/components/Layout/Wrap';
import Filters from '@/components/Issue/Filters/Filters';
import Header from '@/components/header/Header';
import ListHead from '@/components/Issue/List/ListHead';
import List from '@/components/Issue/List/List';
import NoResultIssuePage from './List/NoResultIssuePage';

const Issue = () => {
  const bodyCells = [
    {
      id: '1',
      title: '[FE] UI 구현',
      label: ['feature', 'FE'],
      author: 'kiyoesjh',
      milestone: '[FE] 1주차',
      assignee: [
        { id: '@kiyoesjh', url: 'https://avatars1.githubusercontent.com/u/58324414?s=40&v=4' },
        { id: '@hyewon3938', url: 'https://avatars1.githubusercontent.com/u/58355499?s=40&v=4' }
      ]
    },
    {
      id: '2',
      title: '[BE] cors',
      label: ['feature', 'BE'],
      author: 'beemiel',
      milestone: '[BE] 2주차',
      assignee: [{ id: '@beemiel', url: 'https://avatars1.githubusercontent.com/u/58145890?s=40&v=4' }]
    }
  ];
  return (
    <div>
      <Header />
      <Wrap>
        <Filters />
        <ListWrap>
          <ListHead />
          {bodyCells.length ? <List bodyCells={bodyCells} /> : <NoResultIssuePage />}
        </ListWrap>
      </Wrap>
    </div>
  );
};

export default Issue;

const ListWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-bottom: 0;
  margin-top: 15px;
`;
