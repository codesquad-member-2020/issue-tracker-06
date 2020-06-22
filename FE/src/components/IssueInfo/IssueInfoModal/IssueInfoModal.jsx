import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from '@/components/IssueInfo/IssueInfoModal/IssueInfoItem/IssueInfoItem';

const Wrap = styled.div`
  position: absolute;
  width: 350px;
  border: 1px solid ${({ theme }) => theme.listBorderColor};
  background: white;
  border-radius: 3px;
  top: 30px;
  right: 0px;
  z-index: 1;
`;

const ModalTitle = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding-left: 10px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.mainFontColor};
  background: ${({ theme }) => theme.listBackground};
`;

const ModalItems = styled.div`
  width: 100%;
`;

const IssueInfoModal = ({ modal, infoList }) => {
  const assigneesNumber = 3;
  const titleContent = {
    assignee: `Assign up to ${assigneesNumber} people to this issue`,
    label: 'Apply labels to this issue',
    milestone: 'Set milestone'
  };

  return (
    <>
      <Wrap>
        <ModalTitle>{titleContent[modal]}</ModalTitle>
        <ModalItems>
          {infoList
            ? infoList.map((list, index) => {
                return <Item modal={modal} list={list} key={index}></Item>;
              })
            : ''}
        </ModalItems>
      </Wrap>
    </>
  );
};

export default IssueInfoModal;
