import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  const onChangeId = event => setId(event.target.value);
  const onChangePw = event => setPw(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (id.includes(' ') || pw.includes(' ')) {
      id = id.replace(/(\s*)/g, '');
      pw = pw.replace(/(\s*)/g, '');
    }
    navigate('/main-nuri');
  };

  const validation = () => {
    if (id.includes('@') && pw.length > 5) {
      return true;
    }
    return false;
  };
  const Validation = validation();
  return (
    <div className="login">
      <div className="login_box">
        <h1>Westagram</h1>
        <form onSubmit={onSubmit} className="input_container">
          <input
            onChange={onChangeId}
            value={id}
            className="input_email"
            placeholder="전화번호, 사용자 이름 또는 메일"
            type="text"
          />
          <input
            onChange={onChangePw}
            value={pw}
            className="input_pw"
            placeholder="비밀번호 입력"
            type="password"
          />
          <button disabled={!Validation} type="submit" className="login_btn">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
