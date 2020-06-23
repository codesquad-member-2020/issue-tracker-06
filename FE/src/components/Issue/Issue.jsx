import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrap from '@/components/Layout/Wrap';
import Filters from '@/components/Issue/Filters/Filters';
import Header from '@/components/header/Header';
import ListHead from '@/components/Issue/List/ListHead';
import List from '@/components/Issue/List/List';
import NoResultIssuePage from './List/NoResultIssuePage';
import { useSelector, useDispatch } from 'react-redux';
// import { getIssueList } from '@/actions/issueListAction';
import { getStartIssueList } from '@/actions/issueDataAction';

const Issue = () => {
  const [selected, setSelected] = useState([]);
  const data = useSelector((state) => state.issueDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStartIssueList());
  }, []);

  return (
    <div>
      <Header />
      <Wrap>
        <Filters />
        <ListWrap>
          <ListHead listData={data.overviews} selected={selected} setSelected={setSelected} />
          {/* <List bodyCells={data} selected={selected} setSelected={setSelected} /> */}
          {data.overviews.length ? (
            <List bodyCells={data.overviews} selected={selected} setSelected={setSelected} />
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
