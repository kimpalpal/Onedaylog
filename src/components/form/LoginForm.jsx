import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { requestLogin } from '../../server/account';
import { StDeleteBtn } from '../Main';
import { StBox, StModalBox, StModalContents } from './PostForm';

function LoginForm({ closeJoinModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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
  };

  const signSubmit = async e => {
    e.preventDefault();
    if (!email || !password) {
      return alert('전부 다 입력되지 않았습니다.');
    } else {
      try {
        requestLogin(email, password);

        navigate('/123');
      } catch (error) {
        console.log(error);
      }
      setEmail('');
      setPassword('');
    }
  };
  return (
    <form onSubmit={signSubmit}>
      <StModalBox
        onClick={event => {
          if (event.target === event.currentTarget) {
            closeJoinModal();
          }
        }}
      >
        <StModalContents>
          <StBox>
            <StDeleteBtn type="button" onClick={closeJoinModal}>
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

          <StSignBtn type="submit">로그인</StSignBtn>
          <StJoinBtn type="button">회원가입</StJoinBtn>
        </StModalContents>
      </StModalBox>
    </form>
  );
}

export default LoginForm;

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
const StSignBtn = styled.button`
  width: 80%;
  height: 63px;
  border: solid 0px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  margin-bottom: 10px;
`;
