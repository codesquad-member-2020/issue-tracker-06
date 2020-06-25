import React, { useState } from 'react';
import { Grid, Checkbox, FormControl, Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFilterQuery, clearFilter } from '@/actions/issueListAction';
import filterFetch from '@/lib/util/filterFetch';
import FilterList from './FilterList';

const ListHead = ({ listData, selected, setSelected }) => {
  const [authorList, setAuthor] = useState([]);
  const [labelList, setLabel] = useState([]);
  const [milestoneList, setMilestone] = useState([]);
  const [assigneeList, setAssignee] = useState([]);
  const dispatch = useDispatch();
  const listDataLength = !listData ? '' : listData.length;
  const selectedLength = selected.length;
  const filterHandle = (filter, value) => dispatch(setFilterQuery({ filter, value }));

  const filterData = [
    {
      filter: 'Author',
      fetchDataHandle: () => filterFetch(process.env.FILTER_USER, setAuthor),
      data: authorList.map((list) => {
        return { title: list.name, url: list.profile_image, background: null };
      })
    },
    {
      filter: 'Label',
      fetchDataHandle: () => filterFetch(process.env.FILTER_LABELS, setLabel),
      data: labelList.map((list) => {
        return { title: list.title, url: null, background: list.background };
      })
    },
    {
      filter: 'Milestone',
      fetchDataHandle: () => filterFetch(process.env.FILTER_MILESTONES, setMilestone),
      data: milestoneList.map((list) => {
        return { title: list.title, url: null, background: null };
      })
    },
    {
      filter: 'Assignee',
      fetchDataHandle: () => filterFetch(process.env.FILTER_USER, setAssignee),
      data: assigneeList.map((list) => {
        return { title: list.name, url: list.profile_image, background: null };
      })
    }
  ];

  const handleAllSelected = (event) => {
    if (event.target.checked) {
      const newSelecteds = listData.map((list) => list.issue_id);
      return setSelected(newSelecteds);
    }
    return setSelected([]);
  };

  return (
    <HeadWrap>
      <Grid container spacing={4} className="issue-head">
        <Grid item>
          <Checkbox
            size="small"
            className="check-wrap"
            indeterminate={selectedLength > 0 && selectedLength < listDataLength}
            checked={selectedLength > 0 && selectedLength === listDataLength}
            onChange={handleAllSelected}
          />
          {selectedLength ? <SelectedLengthWrap>{selectedLength} selected</SelectedLengthWrap> : null}
        </Grid>
        <Grid item xs={6}>
          {' '}
        </Grid>
        {!selectedLength ? (
          filterData.map((filterList) => {
            return (
              <FilterList
                key={`filter${filterList.filter}`}
                filter={filterList.filter}
                clickHandle={filterList.fetchDataHandle}
                filterHandle={filterHandle}
                data={filterList.data}
              />
            );
          })
        ) : (
          <GridFilterButton item>
            <FormControlWrap>
              <Select labelId="markAs" id="markAs" displayEmpty value="Mark as">
                <MenuItem value="Mark as" disabled>
                  <em>Mark as</em>
                </MenuItem>
                <MenuItem value="open">open</MenuItem>
                <MenuItem value="close">close</MenuItem>
              </Select>
            </FormControlWrap>
          </GridFilterButton>
        )}
      </Grid>
    </HeadWrap>
  );
};

export default ListHead;

const HeadWrap = styled.div`
  > * {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  .check-wrap {
    padding: 0;
  }

  .issue-head {
    margin: 0;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    background: ${({ theme }) => theme.color.base};
  }
  .MuiGrid-spacing-xs-4 > .MuiGrid-item {
    padding: 0;
  }

  .MuiSelect-select:focus {
    background: none;
  }
`;

const GridFilterButton = styled(Grid)`
  .MuiInput-underline:before {
    display: none;
  }
  .MuiInput-underline:after {
    display: none;
  }
`;

const FormControlWrap = styled(FormControl)`
  height: 100%;
  line-height: normal;
  .MuiFilledInput-root {
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .MuiSelect-select.MuiSelect-select {
    padding: 5px 30px 5px 20px;
  }
`;

const SelectedLengthWrap = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.color.gray};
`;
