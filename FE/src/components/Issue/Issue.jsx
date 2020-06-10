import React from 'react';
import Wrap from '@/components/Layout/Wrap';
import Filters from '@/components/Issue/Filters/Filters';
import Header from '@/components/header/Header';
import List from '@/components/Issue/List/List';

const Issue = () => {
  return (
    <div>
      <Header />
      <Wrap>
        <Filters />
        <List />
      </Wrap>
    </div>
  );
};

export default Issue;
