import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StBtnBox, StHeader, StLogo } from './Header';
import { useNavigate } from 'react-router-dom';
import PostForm from './form/PostForm';

function LoginHeader() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const LogoutBtn = () => navigate('/');
  const MypageBtn = () => navigate('/456');
  return (
    <>
      <StHeader>
        <StLogo>한줄일기</StLogo>

        <StBtnBox>
          <StNewPageBtn onClick={openModal}>새 포스팅</StNewPageBtn>
          <StLogOutBtn onClick={LogoutBtn}>로그아웃</StLogOutBtn>
          <StImage onClick={MypageBtn} />
        </StBtnBox>
      </StHeader>

      {isOpen && <PostForm setIsOpen={setIsOpen} />}
    </>
  );
}

export default LoginHeader;

const StNewPageBtn = styled.button`
  width: 67px;
  height: 30px;

  margin-right: 15px;

  background-color: #ffffff;

  border: 1px solid #6d55ff;
  border-radius: 20px;

  font-size: 12px;
  font-weight: 600;
  color: #6d55ff;

  &:hover {
    background-color: #6d55ff;

    box-shadow: 2px 2px 2px 2px #e8e8f8;

    color: #ffffff;
    font-weight: bolder;

    cursor: pointer;
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
  border: 1px solid #e8e8f8;
  margin-right: 15px;
`;

export const StImage = styled.button`
  cursor: pointer;
  text-decoration: none;
  border-radius: 50%;
  border: solid 0.1px #fffbfb;
  color: #e8e8f8;
  width: 25px;
  height: 25px;
  padding: 6px;
`;
