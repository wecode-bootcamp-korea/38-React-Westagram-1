import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [disa, setDisa] = useState(true);
  const gotoMain = () => {
    navigate('/Main');
  };
  const Main = () => {
    id.includes('@') && pw.length > 4 ? gotoMain() : alert('No');
  };
  const ok = () => {
    id.length > 0 || pw.length > 0 ? setDisa(false) : setDisa(true);
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const pullId = e => {
    setId(e.target.value);
  };
  const pullPw = e => {
    setPw(e.target.value);
  };
  fetch('http::/westagram-signup.herokuapp.com/signup', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      password: pw,
    }),
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });
  // fetch('http::/westagram-signup.herokuapp.com/login', {
  //   method: 'POST',
  // })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log('결과: ', response.token);
  //     if (response.token) {
  //       localStorage.setItem('wtw-token', response.token);
  //     }
  //     // console.log(response.token);
  //   });
  // const [check, setCheck] = useState([]);
  //   fetch('http::/westagram-signup.herokuapp.com/profile', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       setCheck(response);
  //     });
  return (
    <>
      <div className="login">
        <div className="logo">
          <div className="logoWord">Westagram</div>
        </div>
        <div className="inputTag">
          <input
            type="text"
            className="inputId"
            placeholder="  전화번호, 사용자 이름 또는 이메일"
            onKeyUp={ok}
            onChange={pullId}
          />
          <input
            type="text"
            className="inputPassword"
            placeholder="  비밀번호"
            onChange={pullPw}
            onKeyUp={ok}
          />
          <button
            type="button"
            className="buttonClick"
            onClick={Main}
            disabled={disa}
          >
            로그인
          </button>
          {/* 로그인</Link> */}
        </div>
        <div className="footer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </>
  );
}
export default Login;
