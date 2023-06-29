import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { removeList } from '../redux/modules/MainList';
import { StBtn } from './Header';
import UpdateForm from './form/UpdateForm';
function Main() {
  const dispatch = useDispatch();

  const list = useSelector(state => state.MainList);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
          <UpdateForm id={item.id} title={item.title} detail={item.detail} setIsOpen={setIsOpen} />
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
