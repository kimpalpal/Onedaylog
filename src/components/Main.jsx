import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { removeList } from '../redux/modules/MainList';
import { StBtn } from './Header';
import UpdateList from './componentsdetail/UpdateList';
function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const list = useSelector(state => state.MainList);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    localStorage.setItem('title', list.title);
    localStorage.setItem('title', list.detail);
  }, [list.title, list.detail]);

  const dispatch = useDispatch();
  //삭제 버튼입력추가
  // const upDateBtn = (id, newTitle, newDetail) => {
  //   dispatch(updataList(id, newTitle, newDetail));
  // };
  const deleteBtn = id => {
    dispatch(removeList(id));
  };
  return list.map(item => {
    return (
      <>
        <StList>
          <StBox style={{ position: 'relative' }}>
            <StTitle>
              {item.title}
              <StBtn customStyle={{ position: 'absolute', right: '80px' }} onClick={openModal}>
                수정
              </StBtn>
              <StDeleteBtn
                customStyle={{ position: 'absolute', right: 0 }}
                onClick={() => deleteBtn(item.id)}
              >
                삭제
              </StDeleteBtn>
            </StTitle>
            <StDetail>{item.detail}</StDetail>
          </StBox>
        </StList>
        {isOpen && (
          <UpdateList
            id={item.id}
            title={item.title}
            detail={item.detail}
            setIsOpen={setIsOpen}
            // upDateBtn={upDateBtn}
          />
        )}
      </>
    );
  });
}

export default Main;
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
  ${props => props.customStyle};
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
