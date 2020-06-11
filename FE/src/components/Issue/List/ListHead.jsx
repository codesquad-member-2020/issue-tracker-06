import React, { useState } from 'react';
import { Grid, Checkbox, FormControl, Select, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styled from 'styled-components';

const headCells = [
  { id: 'tHeadName', label: ' ' },
  { id: 'tHeadAuthor', label: 'Author' },
  { id: 'tHeadLabel', label: 'Label' },
  { id: 'tHeadMilestones', label: 'Milestones' },
  { id: 'tHeadAssignee', label: 'Assignee' }
];

const ListHead = () => {
  const [filter, setFilter] = useState('is:open');
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <HeadWrap>
      <Grid container spacing={4} className="issue-head">
        <Grid item>
          <Checkbox size="small" className="check-wrap" />
        </Grid>
        {headCells.map((headCell) => {
          const isTitle = headCell.id === 'tHeadName';
          return (
            <GridFilterButton item key={headCell.id} xs={isTitle ? 6 : null}>
              {isTitle ? (
                headCell.label
              ) : (
                <FormControlWrap>
                  <Select
                    labelId={headCell.label}
                    id={headCell.id}
                    displayEmpty
                    value={headCell.label}
                    onChange={handleChange}>
                    <MenuItem value={headCell.label} disabled>
                      <em>{headCell.label}</em>
                    </MenuItem>
                    <MenuItem value="Open issues">Open issues</MenuItem>
                    <MenuItem value="Your Issues">Your Issues</MenuItem>
                    <MenuItem value="Everything assigned to you">Everything assigned to you</MenuItem>
                    <MenuItem value="Everything mentioning you">Everything mentioning you</MenuItem>
                    <MenuItem value="Close issues">Close issues</MenuItem>
                  </Select>
                </FormControlWrap>
              )}
            </GridFilterButton>
          );
        })}
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
