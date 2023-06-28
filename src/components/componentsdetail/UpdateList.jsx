import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StBtn } from '../Header';
import { useDispatch } from 'react-redux';
import { updataList } from '../../redux/modules/MainList';
function UpdateList({ id, setIsOpen, detail, title }) {
  const [newTitle, setnewTitle] = useState(title);
  const [newDetail, setnewDetail] = useState(detail);

  const dispatch = useDispatch();
  //리스트 창 닫기
  const closeModal = () => {
    setnewTitle('');
    setnewDetail('');
    setIsOpen(false);
  };
  //리스트 입력 값
  const newTitleValue = e => {
    setnewTitle(e.target.value);
  };

  const newDetailValue = e => {
    setnewDetail(e.target.value);
  };
  //리스트 수정
  const updateBtn = (id, newTitle, newDetail) => {
    dispatch(updataList(id, newTitle, newDetail));
  };

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
            customStyle={{ fontSize: '18px' }}
            placeholder="제목은 생략이 가능해요"
            value={newTitle}
            onChange={newTitleValue}
          ></StTextarea>
          <StTextarea
            customStyle={{ height: '80%' }}
            placeholder="어떤 이야기를 나누고 싶나요?"
            value={newDetail}
            onChange={newDetailValue}
          ></StTextarea>
          <StBox>
            <StBtn onClick={UpdateBox}>수정하기</StBtn>
            <StBtn type="button" onClick={closeModal}>
              취소
            </StBtn>
          </StBox>
        </StModalContents>
      </StModalBox>
    </form>
  );
}

export default UpdateList;

export const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const StModalContents = styled.div`
  background-color: #fff;
  width: 518px;
  height: 346px;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StTextarea = styled.textarea`
  font-size: 14px;
  width: 95%;
  padding: 10px;
  border: solid 0px;
  outline: none;
  font-family: 'inter', sans-serif;
  font-weight: bolder;
  ${props => props.customStyle};
`;

export const StBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
