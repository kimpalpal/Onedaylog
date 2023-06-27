import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <div className="list">
        <div className="newsfeed">
          <h3> 하루일과 기록 </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae aliquam asperiores
            labore, ratione recusandae enim odio veritatis explicabo vero quos magni alias animi
            adipisci dolore illo similique, aut tempora!Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsam quae aliquam asperiores labore, ratione recusandae enim odio
            veritatis explicabo vero quos magni alias animi adipisci dolore illo similique, aut
            tempora!{' '}
          </p>
        </div>
        <div className="newsfeed">
          <h3> 하루일과 기록 </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae aliquam asperiores
            labore, ratione recusandae enim odio veritatis explicabo vero quos magni alias animi
            adipisci dolore illo similique, aut tempora!Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsam quae aliquam asperiores labore, ratione recusandae enim odio
            veritatis explicabo vero quos magni alias animi adipisci dolore illo similique, aut
            tempora!{' '}
          </p>
        </div>
        <div className="newsfeed">
          <h3> 하루일과 기록 </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae aliquam asperiores
            labore, ratione recusandae enim odio veritatis explicabo vero quos magni alias animi
            adipisci dolore illo similique, aut tempora!Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsam quae aliquam asperiores labore, ratione recusandae enim odio
            veritatis explicabo vero quos magni alias animi adipisci dolore illo similique, aut
            tempora!{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
