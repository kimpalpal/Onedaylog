import React from 'react';
import { styled } from 'styled-components';
function Header() {
  return (
    <StHeader>
      <StLogo>한줄일기</StLogo>
      <StBtnBox>
        <StLoginBtn>로그인</StLoginBtn>
        <StSignupBtn>회원가입</StSignupBtn>
      </StBtnBox>
    </StHeader>
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

export const StLogo = styled.span`
  float: left;
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

const StSignupBtn = styled.button`
  background-color: #6d55ff;
  color: #ffffff;
  border-radius: 20px;
  border: 1px solid #ffffff;
  width: 70px;
  height: 33px;
  font-size: 12px;
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
