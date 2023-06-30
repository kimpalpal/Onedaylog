import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { StBtn } from './Header';
import { getPostList } from '../server/post';
import { db } from '../server/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import UpdateForm from './form/UpdateForm';

function MyList() {
  const userselect = useSelector(state => state.MainList);
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);
  const updatePostList = async () => {
    const postList = await getPostList();

    setList(postList);
  };

  useEffect(() => {
    updatePostList();
  }, [userselect]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteBtn = async id => {
    const idRef = doc(db, 'posts', id);
    await deleteDoc(idRef);
    setList(prev => prev.filter(item => item.id !== id));
  };

  const updateBtn = (id, newTitle, newDetail) => {
    const idRef = doc(db, 'posts', id);
    updateDoc(idRef, { title: newTitle, detail: newDetail });
    setList(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return { ...item, title: newTitle, detail: newDetail };
        } else {
          return item;
        }
      });
    });
  };

  return list.map(item => {
    return (
      <>
        <StList key={item.id}>
          <StBox style={{ position: 'relative' }}>
            <StTitle key={item.title}>
              {item.title}
              <StBtn custompostion={'absolute'} customright={'80px'} onClick={openModal}>
                수정
              </StBtn>
              <StDeleteBtn
                custompostion={'absolute'}
                customright={0}
                onClick={() => deleteBtn(item.id)}
              >
                삭제
              </StDeleteBtn>
            </StTitle>

            <StDetail>{item.detail}</StDetail>
          </StBox>
        </StList>

        {isOpen && (
          <UpdateForm
            id={item.id}
            title={item.title}
            detail={item.detail}
            closeModal={closeModal}
            updateBtn={updateBtn}
          />
        )}
      </>
    );
  });
}

export default MyList;

const StList = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f7;
`;

const StBox = styled.div`
  text-align: left;
  width: 573px;
  height: 230px;
  background-color: #ffffff;
  margin: 15px;
  padding: 20px;
  border-radius: 20px;
`;

const StTitle = styled.div`
  font-weight: bolder;
  font-size: 24px;
`;

const StDetail = styled.p`
  font-weight: bolder;
  font-size: 14px;
`;

export const StDeleteBtn = styled.button`
  background-color: #ffffff;
  color: #ff5555;
  border-radius: 20px;
  border: 1px solid #ff5555;
  width: 70px;
  height: 33px;
  font-size: 12px;
  margin-right: 15px;
  position: ${props => props.custompostion};
  right: ${props => props.customright};
  &:hover {
    height: 30px;
    color: #ffffff;
    background-color: #ff5555;
    border: 1px solid #ff5555;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`;
