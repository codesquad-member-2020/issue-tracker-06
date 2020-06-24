import React from 'react';
import styled from 'styled-components';
import { Grid, Select, FormControl, MenuItem } from '@material-ui/core';

const FilterList = ({ filter, clickHandle, filterHandle, data }) => {
  return (
    <GridFilterButton item key={filter}>
      <FormControlWrap>
        <Select labelId={filter} id={filter} displayEmpty value={filter} onOpen={clickHandle}>
          <MenuItem value={filter} disabled>
            <em>{filter}</em>
          </MenuItem>
          {data.map((item, idx) => {
            return (
              <MenuItem onClick={() => filterHandle(filter, item.title)} key={idx}>
                {item.background && <Color theme={{ background: item.background }} />}
                {item.url && (
                  <ProfileImg>
                    <img src={item.url} />
                  </ProfileImg>
                )}
                {item.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControlWrap>
    </GridFilterButton>
  );
};

export default FilterList;

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

const Color = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.background};
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileImg = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
