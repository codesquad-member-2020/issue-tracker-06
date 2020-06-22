import React from 'react';
import { Grid, Checkbox } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EventNoteIcon from '@material-ui/icons/EventNote';

const List = ({ bodyCells, selected, setSelected }) => {
  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleCheckClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  return !bodyCells ? (
    ''
  ) : (
    <div>
      {bodyCells.map((bodyCell, index) => {
        return (
          <ContainerGrid container spacing={4} key={bodyCell.issue_id}>
            <Grid item>
              <Checkbox
                size="small"
                className="check-wrap"
                checked={isSelected(bodyCell.issue_id)}
                onChange={() => handleCheckClick(event, bodyCell.issue_id)}
              />
            </Grid>
            <Grid item xs={7}>
              <IssueTitle>
                <TitleLink to={`/issueDetail/${bodyCell.issue_id}`}>{bodyCell.title}</TitleLink>
                {bodyCell.labels.length
                  ? bodyCell.labels.map((label) => {
                      return (
                        <LabelWrap key={label.label_id} background={label.background} color={label.text}>
                          {label.title}
                        </LabelWrap>
                      );
                    })
                  : null}
              </IssueTitle>
              <IssueDetailWrap>
                <span>
                  #{bodyCell.issue_id} opened yesterday by <BasicLink to={'/'}>{bodyCell.writer}</BasicLink>
                </span>
                <BasicLink to={'/'}>
                  <EventNoteIcon style={{ fontSize: 15, verticalAlign: 'middle' }} />
                  {bodyCell.milestone}
                </BasicLink>
              </IssueDetailWrap>
            </Grid>
            <GridImgWrap item xs>
              <UserImgWrap>
                {bodyCell.assignees.map((assignee, index) => {
                  return (
                    <ImgLink to={'/'} key={index}>
                      <img src={assignee.profile_image} />
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

const TitleLink = styled(BasicLink)`
  margin-left: 0;
  color: ${({ theme }) => theme.color.darkGray};
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
