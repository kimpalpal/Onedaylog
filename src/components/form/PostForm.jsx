import React, { useState } from 'react';
import { styled } from 'styled-components';
import { addList } from '../../redux/modules/MainList';
import { StBtn } from '../Header';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../server/firebase';
import { useDispatch } from 'react-redux';

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

  const addSubmit = async e => {
    e.preventDefault();
    const newTodo = {
      uid: crypto.randomUUID(),
      title,
      detail,
      isDone: false
    };
    const collectionList = collection(db, 'posts');
    const { id } = await addDoc(collectionList, newTodo);
    dispatch(addList({ ...newTodo, id }));
    setTitle('');
    setDetail('');
    closeModal();
  };

  return (
    <form onSubmit={addSubmit}>
      <StModalBox>
        <StModalContents>
          <StTextarea
            customfontsize={'18px'}
            placeholder="제목은 생략이 가능해요"
            value={title}
            onChange={titleValue}
          ></StTextarea>
          <StTextarea
            customfontsize={'14px'}
            customheight={'80%'}
            placeholder="어떤 이야기를 나누고 싶나요?"
            value={detail}
            onChange={detailValue}
          ></StTextarea>
          <StBox>
            <StBtn type="submit">기록하기</StBtn>
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
export const StTextarea = styled.textarea`
  font-size: ${props => props.customfontsize};
  width: 95%;
  padding: 10px;
  border: solid 0px;
  outline: none;
  font-family: 'inter', sans-serif;
  font-weight: bolder;
  height: ${props => props.customheight};
`;

export const StBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
