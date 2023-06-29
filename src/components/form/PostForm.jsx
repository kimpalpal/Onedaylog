import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { addList } from '../../redux/modules/MainList';
import { StBtn } from '../Header';

function PostForm({ setIsOpen }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  //리스트 창 닫기
  const closeModal = () => {
    setTitle('');
    setDetail('');
    setIsOpen(false);
  };

  //리스트 입력 값
  const titleValue = e => {
    setTitle(e.target.value);
  };

  const detailValue = e => {
    setDetail(e.target.value);
  };

  //리스트 작성 추가
  const addSubmit = e => {
    const newList = {
      id: crypto.randomUUID(),
      title,
      detail,
      isDone: false
    };
    dispatch(addList(newList));
    setTitle('');
    setDetail('');
    closeModal();
  };

  return (
    <form onSubmit={addSubmit}>
      <StModalBox>
        <StModalContents>
          <StTextarea
            customStyle={{ fontSize: '18px' }}
            placeholder="제목은 생략이 가능해요"
            value={title}
            onChange={titleValue}
          ></StTextarea>
          <StTextarea
            customStyle={{ height: '80%' }}
            placeholder="어떤 이야기를 나누고 싶나요?"
            value={detail}
            onChange={detailValue}
          ></StTextarea>
          <StBox>
            <StBtn onClick={addSubmit}>기록하기</StBtn>
            <StBtn type="button" onClick={closeModal}>
              취소하기
            </StBtn>
          </StBox>
        </StModalContents>
      </StModalBox>
    </form>
  );
}

export default PostForm;

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
