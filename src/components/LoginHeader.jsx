import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StHeader, StLogo, StBtnBox } from './Header';

import { useNavigate } from 'react-router-dom';
import TodoList from './componentsdetail/TodoList';

function LoginHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsOpen(true);
  };
  const LogoutBtn = () => navigate('/');
  return (
    <>
      <StHeader>
        <StLogo>한줄일기</StLogo>
        <StBtnBox>
          <StNewPageBtn onClick={openModal}>새 포스팅</StNewPageBtn>
          <StLogOutBtn onClick={LogoutBtn}>로그아웃</StLogOutBtn>
          <StImage></StImage>
        </StBtnBox>
      </StHeader>
      {isOpen && <TodoList setIsOpen={setIsOpen} />}
    </>
  );
}

export default LoginHeader;

const StNewPageBtn = styled.button`
  color: #6d55ff;
  background-color: #ffffff;
  border-radius: 20px;
  width: 67px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'inter', sans-serif;
  border: 1px solid #6d55ff;
  margin-right: 15px;
  &:hover {
    background-color: #6d55ff;
    color: #ffffff;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`;

const StLogOutBtn = styled.button`
  color: #6d55ff;
  background-color: rgb(169, 224, 241, 42%);
  border-radius: 20px;
  width: 67px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'inter', sans-serif;
  border: 1px solid #e8e8f8;
  margin-right: 15px;
`;

const StImage = styled.button`
  cursor: pointer;
  text-decoration: none;
  border-radius: 50%;
  border: solid 0px;
  color: #d9d9d9;
  width: 25px;
  height: 25px;
  padding: 6px;
`;
