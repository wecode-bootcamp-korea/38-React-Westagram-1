import React from 'react';
import './Main.scss';

function MainChoi() {
  return (
    <div className="wrapper">
      <header className="nav">
        <div className="nav-left-icons">
          <div className="westagram-icon">
            <i className="fa-brands fa-instagram" />
            &nbsp;
          </div>
          <div className="westagram-logo">&nbsp;westagram</div>
        </div>
        <div className="finder">
          <div className="glass">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <input className="search" />
        </div>
        <div className="nav-right-icons">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-user" />
        </div>
      </header>
      <div className="main">
        <div className="feeds">
          <div className="user">
            <div className="user-info">
              <div className="pro-pic">
                <img src={require('../../../assets/Choi/catisrunning.png')} />
              </div>
              <div className="user-id">Clever_EasyView</div>
            </div>
            <div className="user-more">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <div className="pic">
            <img src={require('../../../assets/Choi/yang.png')} />
          </div>
          <div className="article-iconbar">
            <div className="iconbar-left">
              <i className="fa-solid fa-heart" />
              <i className="fa-regular fa-comment" />
              <i className="fa-solid fa-arrow-up-from-bracket" />
            </div>
            <div className="iconbar-right">
              <i className="fa-regular fa-bookmark" />
            </div>
          </div>
          <div className="reply">
            <div className="reply-comments" id="reply-comments">
              <div className="reply-user" id="reply-user">
                OLA&nbsp;
              </div>
              <div className="reply-content" id="reply-content">
                호우쓋!
              </div>
            </div>
            <div className="reply-input">
              <input className="reply-input-input" id="reply-input" />
              <button className="reply-input-button" id="reply-button" disabled>
                게시
                <a />
              </button>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="its-me">
            <div className="its-me-left">
              <img src={require('../../../assets/Choi/catisrunning.png')} />
            </div>
            <div className="its-me-right">
              <div className="its-me-id">catisrunning</div>
              <div className="its-me-desc">댐잇소다</div>
            </div>
          </div>
          <div className="story">
            <div className="story-upper">
              <div className="story-title">스토리</div>
              <div className="story-everything">모두보기</div>
            </div>
            <div className="story-contents">
              <div className="story-user">
                <div className="story-user-profile">
                  <img src={require('../../../assets/Choi/catisrunning.png')} />
                </div>
                <div className="story-user-id">스토리아이디</div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="recommend-upper">
              <div className="recommend-title">회원님을위한추천</div>
              <div className="recommend-everything">모두보기</div>
            </div>
            <div className="recommend-contents">
              <div className="recommend-user-profile">
                <img src={require('../../../assets/Choi/catisrunning.png')} />
              </div>
              <div className="recommend-user-id">추천아이디</div>
              <div className="recommend-user-follow">추천팔로우</div>
            </div>
          </div>
          <div className="footer">instagram정보</div>
        </div>
      </div>
    </div>
  );
}

export default MainChoi;
