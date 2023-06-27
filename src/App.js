import React from 'react';
import './App.css';
import Router from './shared/Router';

function App() {
  return (
    <>
      <Router />
      {/* <div className="App">
        <header className="nav">
          <span className="logo">한줄일기</span>
          <div className="buttons">
            <button className="loginBtn">로그인</button>
            <button className="joinBtn">회원가입</button>
          </div>
        </header>
        <div className="modalLogin">
          <form className="modalContents">
            아이디 <input className="inputId" type="text" /> <br></br>
            비밀번호 <input className="inputPw" type="password" />
            <br></br>
            <button className="loginBtn">로그인</button>
            <button className="cancelBtn">취소</button>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default App;
