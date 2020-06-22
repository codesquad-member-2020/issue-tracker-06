import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrap from '@/components/Layout/Wrap';
import Filters from '@/components/Issue/Filters/Filters';
import Header from '@/components/header/Header';
import ListHead from '@/components/Issue/List/ListHead';
import List from '@/components/Issue/List/List';
import NoResultIssuePage from './List/NoResultIssuePage';
import { useSelector, useDispatch } from 'react-redux';
import { getIssueList } from '@/actions/issueListAction';

// const bodyCells = [
//   {
//     id: '1',
//     title: '[FE] UI 구현',
//     label: [
//       {
//         title: 'bug',
//         background: 'green',
//         color: '#ffffff'
//       },
//       {
//         title: 'feature',
//         background: 'yellow',
//         color: '#000000'
//       }
//     ],
//     author: 'kiyoesjh',
//     milestone: '[FE] 1주차',
//     assignee: [
//       { id: '@kiyoesjh', url: 'https://avatars1.githubusercontent.com/u/58324414?s=40&v=4' },
//       { id: '@hyewon3938', url: 'https://avatars1.githubusercontent.com/u/58355499?s=40&v=4' }
//     ]
//   },
//   {
//     id: '2',
//     title: '[BE] cors',
//     label: [],
//     author: 'beemiel',
//     milestone: '[BE] 2주차',
//     assignee: [{ id: '@beemiel', url: 'https://avatars1.githubusercontent.com/u/58145890?s=40&v=4' }]
//   }
// ];

const Issue = () => {
  const [selected, setSelected] = useState([]);
  const { issueList } = useSelector((state) => state.issueListReducer);
  const dispatch = useDispatch();
  console.log(issueList);
  useEffect(() => {
    dispatch(getIssueList());
  }, []);

  return (
    <div>
      <Header />
      <Wrap>
        <Filters />
        <ListWrap>
          <ListHead listData={issueList.overviews} selected={selected} setSelected={setSelected} />
          {issueList.overviews.length ? (
            <List bodyCells={issueList.overviews} selected={selected} setSelected={setSelected} />
          ) : (
            <NoResultIssuePage />
          )}
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
