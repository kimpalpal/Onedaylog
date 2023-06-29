import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { auth } from '../../server/firebase';
import { StDeleteBtn } from '../Main';
import { StBox, StModalBox, StModalContents } from './TodoList';

function HeaderJoin({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [factpassword, setFactPassword] = useState('');

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
    if (name === 'factpassword') {
      setFactPassword(value);
    }
  };

  const joinsubmit = async e => {
    e.preventDefault();
    if (!email || !password || !factpassword) {
      return alert('전부 다 입력되지 않았습니다.');
    }
    if (password === factpassword) {
      return (
        await createUserWithEmailAndPassword(auth, email, password),
        setEmail(''),
        setPassword(''),
        setFactPassword('')
      );
    }
  };
  return (
    <form onSubmit={joinsubmit}>
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
          <StInput
            placeholder="이메일 형식으로"
            name="email"
            value={email}
            onChange={onChange}
          ></StInput>
          <StLeftBox>비밀번호 </StLeftBox>
          <StInput
            placeholder="비밀번호를 입력해주세요."
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          ></StInput>
          <StLeftBox>비밀번호 확인 </StLeftBox>
          <StInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="factpassword"
            value={factpassword}
            onChange={onChange}
          ></StInput>
          <StjoinBtn type="submit">회원가입</StjoinBtn>
        </StModalContents>
      </StModalBox>
    </form>
  );
}

export default HeaderJoin;

const StInput = styled.input`
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
const StjoinBtn = styled.button`
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
