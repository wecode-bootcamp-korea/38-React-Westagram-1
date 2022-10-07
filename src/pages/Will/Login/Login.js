import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

function LoginWill() {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate('/Main');
  };

  return (
    <>
      <div className="outerbox">
        <div className="boxWrap">
          <p className="westagramTitle">Westagram</p>
          <form className="inputBox">
            <ul className="loginInfo">
              <li>
                <input
                  className="loginInput"
                  id="idCheck"
                  type="text"
                  placeholder="Phone number, username, or email"
                />
              </li>
              <li>
                <input
                  className="loginInput"
                  id="pwCheck"
                  type="password"
                  placeholder="Password"
                />
              </li>
              <li>
                <button
                  className="loginButton"
                  id="logButton"
                  type="button"
                  onClick={onClickBtn}
                  disabled
                >
                  Log in
                </button>
              </li>
            </ul>
            <p className="passwordForgot">Forgot Password?</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginWill;
