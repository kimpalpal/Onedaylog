import React, { useState } from 'react';
import { styled } from 'styled-components';
import { requestJoin } from '../../server/account';
import { StDeleteBtn } from '../Main';
import { StBox, StModalBox, StModalContents } from './PostForm';

function JoinForm({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const onChange = event => {
    const {
      target: { name, value }
    } = event;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'passwordCheck') {
      setPasswordCheck(value);
    }
  };

  const joinSubmit = async e => {
    e.preventDefault();

    if (!email || !password || !passwordCheck) {
      return alert('전부 다 입력되지 않았습니다.');
    }

    if (password === passwordCheck) {
      requestJoin(email, password);
      alert('회원가입 되었습니다!!');
      setEmail('');
      setPassword('');
      setPasswordCheck('');
      closeModal();
    }
  };
  return (
    <form onSubmit={joinSubmit}>
      <StModalBox
        onClick={event => {
          if (event.target === event.currentTarget) {
            closeModal();
          }
        }}
      >
        <StModalContents>
          <StBox>
            <StDeleteBtn type="button" onClick={closeModal}>
              닫기
            </StDeleteBtn>
          </StBox>

          <StLeftBox>아이디 </StLeftBox>

          <StInput placeholder="이메일 형식으로" name="email" value={email} onChange={onChange} />

          <StLeftBox>비밀번호 </StLeftBox>

          <StInput
            placeholder="비밀번호를 입력해주세요."
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          />

          <StLeftBox>비밀번호 확인 </StLeftBox>

          <StInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChange}
          />

          <StJoinBtn type="submit">회원가입</StJoinBtn>
        </StModalContents>
      </StModalBox>
    </form>
  );
}

export default JoinForm;

export const StInput = styled.input`
  border: solid 1px #e8e8e8;
  border-radius: 8px;
  width: 80%;
  height: 46.8px;
  padding: 0px;
  margin-bottom: 10px;
  border: 1px solid #e8e8e8;
  outline: none;
  font-family: 'inter', sans-serif;
`;
const StLeftBox = styled.label`
  display: flex;
  justify-content: left;
  width: 80%;
  font-size: 15px;
  font-family: 'inter', sans-serif;
`;
const StJoinBtn = styled.button`
  width: 80%;
  height: 63px;
  border: solid 0px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  background-color: #0085ff;
  margin-bottom: 10px;
`;
