import React, { useState } from 'react';
import { Box, Button, ButtonGroup, InputBase, InputAdornment, FormControl, Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';

const Filters = () => {
  const [filter, setFilter] = useState('open');
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <BoxWrapStyle display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
      <FormWrap display="flex" flexDirection="row" alignItems="center">
        <FormControlWrap variant="filled">
          <Select
            id="demo-simple-select-filled"
            open={open}
            displayEmpty
            onClose={handleClose}
            onOpen={handleOpen}
            value="Filters"
            onChange={handleChange}>
            <MenuItem value="Filters" disabled>
              <em>Filters</em>
            </MenuItem>
            <MenuItem value="Open issues">Open issues</MenuItem>
            <MenuItem value="Your Issues">Your Issues</MenuItem>
            <MenuItem value="Everything assigned to you">Everything assigned to you</MenuItem>
            <MenuItem value="Everything mentioning you">Everything mentioning you</MenuItem>
            <MenuItem value="Close issues">Close issues</MenuItem>
          </Select>
        </FormControlWrap>
        <InputBaseWrap
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{ color: '#999999' }} />
            </InputAdornment>
          }
          placeholder="Search all issues"
          inputProps={{ 'aria-label': 'Search all issues' }}
          value={`is:${filter}`}
        />
      </FormWrap>
      <ButtonWrapBox display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
        <ButtonGroup variant="contained">
          <Button variant="outlined">
            <LocalOfferOutlinedIcon fontSize="small" style={{ marginRight: '5px' }} />
            Labels <CircleFill>{0}</CircleFill>
          </Button>
          <Button variant="outlined">
            <EventNoteOutlinedIcon fontSize="small" style={{ marginRight: '5px' }} />
            Milestones <CircleFill>{0}</CircleFill>
          </Button>
        </ButtonGroup>
        <NewIssueButton variant="contained">New issue</NewIssueButton>
      </ButtonWrapBox>
    </BoxWrapStyle>
  );
};

export default Filters;

const BoxWrapStyle = styled(Box)`
  height: 34px;
  width: 100%;
`;

const FormWrap = styled(Box)`
  width: 55%;
  height: 100%;
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

const InputBaseWrap = styled(InputBase)`
  width: 80%;
  color: ${({ theme }) => theme.color.gray};
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  background-color: ${({ theme }) => theme.color.base};
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 10px;
`;

const ButtonWrapBox = styled(Box)`
  width: 40%;
`;

const NewIssueButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
`;

const CircleFill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.color.lightGray};
`;
