import React from 'react';
import styled from 'styled-components';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import { useHistory, useLocation } from 'react-router-dom';

const LabelsMilestoneWrapper = styled.div`
  display: flex;
`;

const Tap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.mainFontColor};
  border: 1px solid #e1e4e8;
  > span {
    margin-left: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const LabelsMilestoneTap = () => {
  const history = useHistory();
  const currentLocation = useLocation().pathname;
  console.log(currentLocation);

  const labelsTapColor =
    currentLocation === '/labels'
      ? { background: '#0366D6', color: 'white' }
      : { background: 'white', color: '#586069' };
  const milestonesTapColor =
    currentLocation === '/milestones'
      ? { background: '#0366D6', color: 'white' }
      : { background: 'white', color: '#586069' };

  return (
    <LabelsMilestoneWrapper>
      <Tap
        style={{ background: labelsTapColor.background, color: labelsTapColor.color }}
        onClick={() => history.push('/labels')}>
        <LocalOfferOutlinedIcon fontSize="small" />
        <span>Labels</span>
      </Tap>
      <Tap
        style={{ background: milestonesTapColor.background, color: milestonesTapColor.color }}
        onClick={() => history.push('/milestones')}>
        <EventNoteOutlinedIcon fontSize="small" />
        <span>Milestones</span>
      </Tap>
    </LabelsMilestoneWrapper>
  );
};

export default LabelsMilestoneTap;
