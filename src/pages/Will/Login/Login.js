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

  let [checkid, setCheckid] = useState('');
  let [checkpw, setCheckpw] = useState('');

  const saveUserID = event => {
    setCheckid(event.target.value);
    console.log(event.target.value);
  };

  const saveUserPw = event => {
    setCheckpw(event.target.value);
    console.log(event.target.value);
  };

  return (
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
                onChange={saveUserID}
              />
            </li>
            <li>
              <input
                className="loginInput"
                id="pwCheck"
                type="password"
                placeholder="Password"
                onChange={saveUserPw}
              />
            </li>
            <li>
              <button
                className="loginButton"
                id="logButton"
                type="button"
                disabled={
                  checkid.includes('@') && checkpw.length > 4 ? false : true
                }
                onClick={onClickBtn}
              >
                Log in
              </button>
            </li>
          </ul>
          <p className="passwordForgot">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
}

export default LoginWill;
