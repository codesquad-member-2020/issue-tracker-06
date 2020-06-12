import React from 'react';
import { Grid, Checkbox } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EventNoteIcon from '@material-ui/icons/EventNote';

const List = ({ bodyCells }) => {
  return (
    <div>
      {bodyCells.map((bodyCell) => {
        return (
          <ContainerGrid container spacing={4} key={bodyCell.id}>
            <Grid item>
              <Checkbox size="small" className="check-wrap" />
            </Grid>
            <Grid item xs={7}>
              <IssueTitle>
                {bodyCell.title}
                {bodyCell.label.length
                  ? bodyCell.label.map((label) => {
                      return (
                        <LabelWrap key={label.background} background={label.background} color={label.color}>
                          {label.title}
                        </LabelWrap>
                      );
                    })
                  : null}
              </IssueTitle>
              <IssueDetailWrap>
                <span>
                  #{bodyCell.id} opened yesterday by <BasicLink to={'/'}>{bodyCell.author}</BasicLink>
                </span>
                <BasicLink to={'/'}>
                  <EventNoteIcon style={{ fontSize: 15, verticalAlign: 'middle' }} />
                  {bodyCell.milestone}
                </BasicLink>
              </IssueDetailWrap>
            </Grid>
            <GridImgWrap item xs>
              <UserImgWrap>
                {bodyCell.assignee.map((assignee) => {
                  return (
                    <ImgLink to={'/'} key={assignee.url}>
                      <img src={assignee.url} />
                    </ImgLink>
                  );
                })}
              </UserImgWrap>
            </GridImgWrap>
            <Grid item xs></Grid>
          </ContainerGrid>
        );
      })}
    </div>
  );
};

export default List;

const ContainerGrid = styled(Grid)`
  margin: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  &:hover {
    background: ${({ theme }) => theme.color.base};
  }
  .check-wrap {
    padding: 0;
  }
`;

const GridImgWrap = styled(Grid)`
  position: relative;
`;

const IssueTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.ragular};
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
`;

const UserImgWrap = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  height: 20px;
  flex-direction: row-reverse;
  margin-top: 5px;
  &:hover {
    > a {
      margin-left: 3px;
    }
  }
`;

const IssueDetailWrap = styled.div`
  margin-top: 5px;
  &,
  * {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  color: ${({ theme }) => theme.color.gray};
`;

const BasicLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray};
  text-decoration: none;
  outline: none;
  margin-left: 3px;
  &:active,
  &:focus,
  &:visited {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const ImgLink = styled(Link)`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 0;
  margin-left: -11px;
  border-radius: 3px;
  border-left: 1px solid #fff;
  transition: margin 0.1s ease-in-out;
  &:first-child {
    z-index: 3;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const LabelWrap = styled.span`
  padding: 2px 5px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  margin-left: 3px;
  border-radius: 3px;
  &:first-child {
    margin-left: 5px;
  }
`;
