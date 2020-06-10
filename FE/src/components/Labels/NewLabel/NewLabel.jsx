import React from 'react';
import styled from 'styled-components';

const NewLabelContentWrapper = styled.div`
  display: flex;
  margin: 25px 0;
  justify-content: space-between;
`;

const NewLabelInputWrapper = styled.div`
  margin-right: 15px;
`;

const NewLabelTitle = styled.div`
  color: ${({ theme }) => theme.darkFontColor};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
`;

const NewLabelInput = styled.input`
  ${({ theme }) => theme.input};
  width: 200px;
`;

const ColorInputWrapper = styled.div`
  display: flex;
`;

const ColorChangeButton = styled.button`
  background: #e8ea80;
  outline: 0;
  border: 0;
  width: 38px;
  border-radius: 5px;
  margin-right: 5px;
`;

const ColorChangeInput = styled.input`
  ${({ theme }) => theme.input};
  width: 60px;
`;

const NewLabelButtonWrapper = styled.div`
  display: flex;
  width: 185px;
  align-items: flex-end;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  ${({ theme }) => theme.greyButton};
`;

const CreateButton = styled.button`
  ${({ theme }) => theme.greenButton};
`;

const colorInputChangeHandler = () => {
  console.log('change');
};

const NewLabel = () => {
  return (
    <NewLabelContentWrapper>
      <NewLabelInputWrapper>
        <NewLabelTitle>Label name</NewLabelTitle>
        <NewLabelInput placeholder="Label name"></NewLabelInput>
      </NewLabelInputWrapper>
      <NewLabelInputWrapper>
        <NewLabelTitle>Description</NewLabelTitle>
        <NewLabelInput placeholder="Description (optional)" style={{ width: '350px' }}></NewLabelInput>
      </NewLabelInputWrapper>
      <NewLabelInputWrapper>
        <NewLabelTitle>Color</NewLabelTitle>
        <ColorInputWrapper>
          <ColorChangeButton></ColorChangeButton>
          <ColorChangeInput type="text" defaultValue="#E8EA80" onChange={colorInputChangeHandler}></ColorChangeInput>
        </ColorInputWrapper>
      </NewLabelInputWrapper>

      <NewLabelButtonWrapper>
        <CancelButton>Cancel</CancelButton>
        <CreateButton>Create label</CreateButton>
      </NewLabelButtonWrapper>
    </NewLabelContentWrapper>
  );
};

export default NewLabel;
