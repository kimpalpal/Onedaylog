import React, { useState } from 'react';
import { styled } from 'styled-components';
import JoinForm from './form/JoinForm';
import LoginForm from './form/LoginForm';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openJoinModal = () => {
    setJoinOpen(true);
  };

  const closeJoinModal = () => {
    setJoinOpen(false);
  };

  return (
    <>
      <StHeader>
        <StLogo>한줄일기</StLogo>

        <StBtnBox>
          <StLoginBtn onClick={openJoinModal}>로그인</StLoginBtn>
          <StBtn onClick={openModal}>회원가입</StBtn>
        </StBtnBox>
      </StHeader>

      {joinOpen && <LoginForm closeJoinModal={closeJoinModal} />}
      {isOpen && <JoinForm closeModal={closeModal} />}
    </>
  );
}

export default Header;

export const StHeader = styled.header`
  background-color: #ffffff;
  width: 100%;
  height: 57px;
  color: #000000;
  font-weight: 500;
  font-size: 24px;
`;

export const StLogo = styled.button`
  background-color: #ffffff;
  border: 0px solid;
  float: left;
  font-size: 24px;
  margin-left: 35px;
  margin-top: 8px;
`;

export const StBtnBox = styled.div`
  float: right;
  margin-right: 50px;
  margin-top: 8px;
`;
const StLoginBtn = styled.button`
  color: #6d55ff;
  background-color: #ffffff;
  border-radius: 20px;
  width: 67px;
  height: 30px;
  font-size: 12px;
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

export const StBtn = styled.button`
  background-color: #6d55ff;
  color: #ffffff;
  border-radius: 20px;
  border: 1px solid #ffffff;
  width: 70px;
  height: 33px;
  font-size: 12px;
  margin-right: 15px;
  position: ${props => props.custompostion};
  right: ${props => props.customright};
  &:hover {
    height: 30px;
    color: #6d55ff;
    background-color: #ffffff;
    border: 1px solid #6d55ff;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`;
