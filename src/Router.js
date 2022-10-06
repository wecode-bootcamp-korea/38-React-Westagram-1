import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Will의 컴포넌트
import LoginWill from './pages/Will/Login/Login';
import MainWill from './pages/Will/Main/Main';

// Nuri의 컴포넌트
import LoginNuri from './pages/Nuri/Login/Login';
import MainNuri from './pages/Nuri/Main/Main';

// Jung의 컴포넌트
import LoginJung from './pages/Jung/Login/Login';
import MainJung from './pages/Jung/Main/Main';

// Choi의 컴포넌트
import LoginChoi from './pages/Choi/Login/Login';
import MainChoi from './pages/Choi/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-will" element={<LoginWill />} />
        <Route path="/main-will" element={<MainWill />} />
        <Route path="/login-nuri" element={<LoginNuri />} />
        <Route path="/main-nuri" element={<MainNuri />} />
        <Route path="/login-choi" element={<LoginChoi />} />
        <Route path="/main-choi" element={<MainChoi />} />
        <Route path="/login-jung" element={<LoginJung />} />
        <Route path="/main-jung" element={<MainJung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
