import React from 'react';
import styled from 'styled-components';

const LabelsMilestoneWrapper = styled.div`
  display: flex;
`;

const Tap = styled.a`
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.mainFontColor};
  border: 1px solid #e1e4e8;
  &:hover {
    background: ${({ theme }) => theme.mainBlueColor};
    color: white;
  }
`;

const LabelsMilestoneTap = () => {
  return (
    <LabelsMilestoneWrapper>
      <Tap>Labels</Tap>
      <Tap>Milestones</Tap>
    </LabelsMilestoneWrapper>
  );
};

export default LabelsMilestoneTap;
