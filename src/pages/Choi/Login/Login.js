import React, { useState } from 'react';
import './Login.scss';
import { Navigate, useNavigate } from 'react-router-dom';
// function idValidation(e) {
//   setIdvalid = e.target.value;
// }

// function pwValidation(e) {
//   setPwValid = e.tagret.value;
// }

function LoginChoi() {
  const [idValid, setIdValid] = useState('');
  const [pwValid, setPwValid] = useState('');
  const navigate = useNavigate();
  const goToMain = () => {
    fetch('http://10.58.52.116:8000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'qq',
        email: idValid,
        profile_image: 'qqq',
        password: pwValid,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => console.log(data));
    //   fetch('http://10.58.52.116:8000/users/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name: 'qq',
    //       email: idValid,
    //       profile_image: 'qqq',
    //       password: pwValid,
    //     }),
    //   }) //요청
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // };
  };
  return (
    <div className="wrapper">
      <div className="westagram">
        <h1 className="logo">westagram</h1>
        <div className="login-container">
          <input
            onChange={e => {
              setIdValid(e.target.value);
            }}
            id="login-id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={e => {
              setPwValid(e.target.value);
            }}
            type="password"
            id="login-pw"
            placeholder="비밀번호"
          />
          <button
            id="login-btn"
            onClick={goToMain}
            disabled={!(idValid.includes('@') && pwValid.length > 4)}
          >
            로그인
          </button>
        </div>
        <div className="find-password">
          <a>비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginChoi;
