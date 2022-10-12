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
    navigate(`/main-choi`);
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
