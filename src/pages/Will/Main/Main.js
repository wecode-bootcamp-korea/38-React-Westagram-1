import React from 'react';
import './Main.scss';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
  faCompass,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpRightFromSquare,
  faMagnifyingGlassLocation,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Nav } from './components/Nav/Nav';

function MainWill() {
  let [likes, likesadd] = useState(0);

  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="givenProfile">
              <img
                className="profileImg"
                src="https://user-images.githubusercontent.com/111094669/193998675-9ccf6d46-0ca8-4d2c-8108-022fa100f540.png"
              />
              <span className="instaID">
                <strong>w00jinkim</strong>
              </span>
              <span class="threeDots">
                <strong>···</strong>
              </span>
            </div>
            <div>
              <img
                src="https://user-images.githubusercontent.com/111094669/192498973-06b7ab82-68db-4dd6-8b0e-d6c39dcedfcb.jpeg"
                className="mainImage"
              />
            </div>
            <div className="lowerIcons">
              <span>
                <FontAwesomeIcon
                  icon={faHeart}
                  id="lowheart"
                  onClick={() => {
                    likesadd(likes + 1);
                  }}
                />
                <FontAwesomeIcon icon={faComment} id="comment" />
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} id="bracket" />
                <FontAwesomeIcon icon={faBookmark} id="bookmark" />
              </span>
            </div>
            <div>
              <img
                className="profileImgLike"
                src="https://user-images.githubusercontent.com/111094669/193998675-9ccf6d46-0ca8-4d2c-8108-022fa100f540.png"
              />
              <span className="sumOfLikes">
                <strong>w00jinkim</strong>님 외 <strong>{likes}명</strong>이
                좋아합니다
              </span>
            </div>
            <div className="instaDescription">
              <ul id="ulComm" className="ulCom">
                <li>
                  <div>
                    <strong>w00jinkim</strong> 가보자 우주로!
                  </div>
                </li>
                <li>
                  <div>
                    <strong>BMW Korea</strong> 거봐 좋았잖아~~~~~
                  </div>
                </li>
              </ul>
              <div className="theTimeAgo">3시간 전</div>
            </div>
            <div className="replyText">
              <form id="instaForm">
                <input
                  id="instaCom"
                  className="instagramReply"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button id="replyBtn" className="replySubmit">
                  게시
                </button>
              </form>
              <ul id="comments" />
            </div>
          </article>
        </div>
        <div className="mainRight">
          <img
            className="instaFollowers"
            src="https://user-images.githubusercontent.com/111094669/192520591-80f83697-a171-4822-b92c-1390fe7986a9.png"
          />
          <div className="etcWords">
            <p>소개·도움말·홍보 센터·API채용보·개인정보처리방침</p>
            <div>약관·위치·언어</div>
            <p>© 2022 WESTAGRAM FROM WETA</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainWill;
