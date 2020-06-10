import React from 'react';
import { Box, Button, ButtonGroup, InputBase, InputAdornment } from '@material-ui/core';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EventNoteIcon from '@material-ui/icons/EventNote';
import theme from '@/components/style/theme';

const Filters = () => {
  return (
    <BoxWrapStyle display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box display="flex" flexDirection="row" alignItems="center" style={formWrapStyle}>
        <Button variant="contained" style={buttonStyle}>
          Filters <ArrowDropDownIcon fontSize="small" />
        </Button>
        <InputBase
          style={inputStyle}
          defaultValue="is:open is:issue"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{ color: '#999999' }} />
            </InputAdornment>
          }
          placeholder="Search all issues"
          inputProps={{ 'aria-label': 'Search all issues' }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        style={buttonWrapStyle}>
        <ButtonGroup variant="contained">
          <Button variant="outlined">
            <LocalOfferIcon fontSize="small" />
            Labels <span>{0}</span>
          </Button>
          <Button variant="outlined">
            <EventNoteIcon fontSize="small" />
            Milestones <span>{0}</span>
          </Button>
        </ButtonGroup>
        <Button variant="contained" style={newIssueStyle}>
          New issue
        </Button>
      </Box>
    </BoxWrapStyle>
  );
};

export default Filters;

const BoxWrapStyle = styled(Box)`
  height: 34px;
  width: 100%;
`;

const formWrapStyle = {
  width: '55%',
  height: '100%'
};

const buttonStyle = {
  lineHeight: 'normal',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  height: '100%'
};

const inputStyle = {
  width: '80%',
  color: theme.color.gray,
  border: `1px solid ${theme.color.lightGray}`,
  backgroundColor: theme.color.base,
  borderRadius: '5px',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  paddingLeft: '10px'
};

const buttonWrapStyle = {
  width: '40%'
};

const newIssueStyle = {
  backgroundColor: theme.color.green,
  color: theme.color.white
};
