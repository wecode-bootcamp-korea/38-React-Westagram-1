import React from 'react';
import '../Nav/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="navBox">
        <div className="left">
          <div className="icon">
            <a href="/main.html">
              <div alt="instagram" className="instagram" />
            </a>
          </div>
          <div className="logo">
            <a href="/main.html">Westagram</a>
          </div>
        </div>
        <div className="searchBox">
          <input type="text" className="search" placeholder="검색" />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="right">
          <div alt="explore" className="rightExplore" />
          <div alt="heart" className="rightHeart" />
          <div alt="profile" className="rightProfile" />
          <div className="navMe">
            <div className="navMeBox">
              <div className="navMeBoxPro">
                <div className="Me">
                  <i className="fa-regular fa-user" />
                </div>
                <div clasclassNames="MeText">프로필</div>
              </div>
              <div className="navMeBoxSave">
                <div className="Save">
                  <i className="fa-regular fa-bookmark" />
                </div>
                <div className="SaveText">저장됨</div>
              </div>
              <div className="navMeBoxSet">
                <div className="Setting">
                  <i className="fa-solid fa-gear" />
                </div>
                <div className="SettingText">설정</div>
              </div>
              <div className="navMeBoxOut">
                <div className="logOut">로그아웃</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
