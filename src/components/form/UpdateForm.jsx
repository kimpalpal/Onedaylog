import React, { useState } from 'react';
import { StBtn } from '../Header';
import { StBox, StModalBox, StModalContents, StTextarea } from './PostForm';

function UpdateForm({ id, closeModal, detail, title, updateBtn }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDetail, setNewDetail] = useState(detail);

  //리스트 입력 값
  const newTitleValue = e => {
    setNewTitle(e.target.value);
  };

  const newDetailValue = e => {
    setNewDetail(e.target.value);
  };

  //리스트 수정

  const UpdateBox = event => {
    event.preventDefault();
    updateBtn(id, newTitle, newDetail);
    closeModal();
  };

  return (
    <form onSubmit={UpdateBox}>
      <StModalBox>
        <StModalContents>
          <StTextarea
            customfontsize={'18px'}
            placeholder="제목은 생략이 가능해요"
            value={newTitle}
            onChange={newTitleValue}
          ></StTextarea>
          <StTextarea
            customfontsize={'14px'}
            customheight={'80%'}
            placeholder="어떤 이야기를 나누고 싶나요?"
            value={newDetail}
            onChange={newDetailValue}
          ></StTextarea>
          <StBox>
            <StBtn type="submit">수정하기</StBtn>
            <StBtn type="button" onClick={closeModal}>
              취소
            </StBtn>
          </StBox>
        </StModalContents>
      </StModalBox>
    </form>
  );
}

export default UpdateForm;
