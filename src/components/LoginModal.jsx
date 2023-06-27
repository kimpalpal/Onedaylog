import React, { useState } from 'react';
import styledComonent, { styled } from 'styled-components';

// 로그인 버튼 클릭시 true->로그인모달 활성화
function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <StLoginBox>
        <button onClick={openModal}>로그인버튼 </button>
        {isOpen && (
          <StModalContents>
            <StCloseModalBtn onClick={closeModal}> 닫기 </StCloseModalBtn>

            <div>
              {' '}
              <StP>아이디</StP>
              <StInput type="text" />
              <StP>비밀번호</StP>
              <StInput type="password" />
            </div>
            <StLoginBtnModal>로그인</StLoginBtnModal>
            <StJoinBtnModal>회원가입</StJoinBtnModal>
            <div>
              <a>이미 회원이신가요?</a>
            </div>
          </StModalContents>
        )}
      </StLoginBox>
    </div>
  );
}

export default LoginModal;

export const StLoginBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  aling-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 518px;
  height: 372px;
  border-radius: 24px;
`;
export const StCloseModalBtn = styled.button`
  float: right;
  color: #ff5555;
  background-color: #ffffff;
  border-radius: 20px;
  width: 67px;
  height: 30px;
  font-size: 12px;
  border: 1px solid #ff5555;
  margin-right: 15px;
  &:hover {
    background-color: #ff5555;
    color: #ffffff;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`;
export const StInput = styled.input`
  width: 470px;
  height: 52px;
  border: 1px solid #e8e8e8;
`;
export const StP = styled.p`
  font-size: 24px;
  margin-bottom: 5px;
  font-size: 20px;
`;
const StLoginBtnModal = styled.button`
  width: 470px;
  height: 50px;
  border-radius: 20px;
  background-color: #0085ff;
  color: #ffffff;
  font-size: 23px;
  margin: 5px;
  border: none;
  cursor: pointer;
`;

const StJoinBtnModal = styled.button`
  width: 470px;
  height: 50px;
  border-radius: 20px;
  background-color: #ffffff;
  color: #0085ff;
  font-size: 23px;
  margin: 5px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
`;
