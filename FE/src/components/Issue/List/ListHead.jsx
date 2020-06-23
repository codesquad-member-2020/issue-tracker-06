import React, { useState } from 'react';
import { Grid, Checkbox, FormControl, Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterQuery, clearFilter } from '@/actions/issueListAction';

const headCells = [
  { id: 'tHeadAuthor', label: 'Author' },
  { id: 'tHeadLabel', label: 'Label' },
  { id: 'tHeadMilestones', label: 'Milestones' },
  { id: 'tHeadAssignee', label: 'Assignee' }
];

const authorList = [{ value: 'hyewon3938' }, { value: 'kiyoesjh' }, { value: 'beemiel' }];
const labelList = [{ value: 'BE' }, { value: 'FE' }, { value: 'feature' }];
const milestoneList = [{ value: '[BE] 1주차' }, { value: '[BE] 2주차' }, { value: '[FE] 1주차' }];
const assigneeList = [{ value: 'hyewon3938' }, { value: 'kiyoesjh' }, { value: 'beemiel' }];

const ListHead = ({ listData, selected, setSelected }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('is:open ');
  const listDataLength = !listData ? '' : listData.length;
  const selectedLength = selected.length;

  const [filterList, setFilterList] = useState([]);

  const handleChange = (event) => {
    console.log('change');
    setFilter(event.target.value);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget, 'click');
  };

  const handleAllSelected = (event) => {
    if (event.target.checked) {
      const newSelecteds = listData.map((list) => list.issue_id);
      return setSelected(newSelecteds);
    }
    return setSelected([]);
  };

  const fetchFilter = (e, filterId) => {
    switch (filterId) {
      case 'Author':
        setFilterList(authorList);
        break;
      case 'Label':
        setFilterList(labelList);
        break;
      case 'Milestones':
        setFilterList(milestoneList);
        break;
      case 'Assignee':
        setFilterList(assigneeList);
        break;
      default:
        break;
    }
  };

  const applyFilter = (filter, value) => {
    dispatch(setFilterQuery({ filter: filter, value: value }));
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
          headCells.map((headCell) => {
            return (
              <GridFilterButton item key={headCell.id}>
                <FormControlWrap>
                  <Select
                    labelId={headCell.label}
                    id={headCell.id}
                    displayEmpty
                    value={headCell.label}
                    // onChange={handleChange}
                    onOpen={(e) => fetchFilter(e, headCell.label)}>
                    <MenuItem value={headCell.label} disabled>
                      <em>{headCell.label}</em>
                    </MenuItem>
                    {filterList
                      ? filterList.map((list, index) => {
                          return (
                            <MenuItem onClick={() => applyFilter(headCell.label, list.value)} key={index}>
                              {list.value}
                            </MenuItem>
                          );
                        })
                      : ''}
                  </Select>
                </FormControlWrap>
              </GridFilterButton>
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
