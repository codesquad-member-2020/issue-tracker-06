import React from 'react';
import styled from 'styled-components';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const NewLabel = ({ type, cancelClickHandler, data }) => {
  const { title, background, color, description } = data;
  const buttonContent = type === 'new' ? 'Create label' : 'Edit label';

  const colorInputChangeHandler = () => {
    console.log('change');
  };

  return (
    <NewLabelContentWrapper>
      <NewLabelInputWrapper>
        <NewLabelTitle>Label name</NewLabelTitle>
        <NewLabelInput placeholder="Label name" value={title} onChange={() => {}} />
      </NewLabelInputWrapper>
      <NewLabelInputWrapper>
        <NewLabelTitle>Description</NewLabelTitle>
        <NewLabelInput
          placeholder="Description (optional)"
          style={{ width: '390px' }}
          value={description}
          onChange={() => {}}
        />
      </NewLabelInputWrapper>
      <NewLabelInputWrapper>
        <NewLabelTitle>Color</NewLabelTitle>
        <ColorInputWrapper>
          <ColorChangeButton style={{ background: background }}>
            <AutorenewIcon fontSize="small" style={{ color: color }} />
          </ColorChangeButton>
          <ColorChangeInput
            type="text"
            defaultValue={background === undefined ? '#e8ea80' : background}
            onChange={colorInputChangeHandler}></ColorChangeInput>
        </ColorInputWrapper>
      </NewLabelInputWrapper>

      <NewLabelButtonWrapper>
        <CancelButton onClick={() => cancelClickHandler(type)}>Cancel</CancelButton>
        <CreateButton>{buttonContent}</CreateButton>
      </NewLabelButtonWrapper>
    </NewLabelContentWrapper>
  );
};

export default NewLabel;

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
  width: 160px;
  height: 30px;
`;

const ColorInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorChangeButton = styled.button`
  background: #e8ea80;
  outline: 0;
  border: 0;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const ColorChangeInput = styled.input`
  ${({ theme }) => theme.input};
  width: 80px;
  height: 30px;
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
  min-width: 105px;
`;
