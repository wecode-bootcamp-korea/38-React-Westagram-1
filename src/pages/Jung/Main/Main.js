import React, { useEffect, useState } from 'react';
import './Main.scss';
// import Commenttext from './Commenttext';
import Aside from './Aside';
import { AsideData } from './AsideData';
import CommentList from './CommentList';
function MainJung() {
  const [commentLists, setCommentLists] = useState([]);
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(response => {
        setCommentLists(response);
      });
  }, []);
  return (
    <React.Fragment>
      <body>
        <nav>
          <div className="navBox">
            <div className="left">
              <div className="icon">
                <a href="/main.html">
                  <div
                    alt="instagram"
                    src="/images/instagram.png"
                    className="instagram"
                  />
                </a>
              </div>
              <div className="logo">
                <a href="/main.html">Westagram</a>
              </div>
            </div>
            <div className="searchBox">
              <input type="text" className="search" placeholder="검색" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="right">
              <div alt="explore" className="rightExplore" />
              <div alt="heart" className="rightHeart" />
              <div
                alt="profile"
                src="/images/profile.png"
                className="rightProfile"
              />
              <div className="navMe">
                <div className="navMeBox">
                  <div className="navMeBoxPro">
                    <div className="Me">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div clasclassNames="MeText">프로필</div>
                  </div>
                  <div className="navMeBoxSave">
                    <div className="Save">
                      <i className="fa-regular fa-bookmark"></i>
                    </div>
                    <div className="SaveText">저장됨</div>
                  </div>
                  <div className="navMeBoxSet">
                    <div className="Setting">
                      <i className="fa-solid fa-gear"></i>
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
        <main>
          <div className="mainPage">
            <div className="mainCenter">
              <div className="mainCenterList">
                {commentLists.map(item => (
                  <CommentList
                    key={item.id}
                    name={item.name}
                    photo={item.photo}
                    profile={item.profile}
                    like={item.like}
                  />
                ))}
              </div>
              {/* <div className="mainbox">
                <div className="mainFaceBox">
                  <div className="mainFace"></div>
                  <div className="mainFaceId">JungGwanHun</div>
                  <div className="dot">
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
                <div className="article">
                  <div alt="photo" className="photo" />
                </div>
                <div className="bottomBox">
                  <div className="bottomBoxUp">
                    <div className="bottomBoxUpEmoji">
                      <div className="heart">
                        <i className="fa-solid fa-heart"></i>
                      </div>
                      <div className="comment">
                        <i className="fa-regular fa-comment"></i>
                      </div>
                      <div className="share">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </div>
                    </div>
                    <div className="bottomBoxUpTag">
                      <div className="bookMark">
                        <i className="fa-regular fa-bookmark"></i>
                      </div>
                    </div>
                  </div>
                  <div className="bottomBoxMid">
                    <div className="bottomBoxMidIcon"></div>
                    <div className="bottomBoxMidId">
                      Dog3님 외<div className="number">3</div>
                      명이 좋아합니다.
                    </div>
                  </div>
                  <div className="bottomBoxDown">
                    <div className="bottomBoxDownComment">
                      <div>
                        {arr.map(textlist => (
                          <Commenttext
                            id={textlist.id}
                            comment={textlist.comment}
                            delClick={delClick}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bottomBoxDownHeart"></div>
                  </div>
                  <form className="mainFooter" onSubmit={commnetClick}>
                    <input
                      type="text"
                      className="mainFooterInput"
                      placeholder="댓글 달기..."
                      onChange={textComment}
                    ></input>
                    <div className="buttonClick" onClick={commnetClick}>
                      게시
                    </div>
                  </form>
                </div>
              </div> */}
              <div className="mainRight">
                <div className="mainRightIconBox">
                  <div className="mainRightIcon"></div>
                  <div className="mainRightId">
                    wecode_bootcamp
                    <br />
                    WeCode I 위코드
                  </div>
                </div>
                <div className="storyBox">
                  <div className="storyBoxUp">
                    <div className="storyBoxUpLeft">스토리</div>
                    <div className="storyBoxUpRight">모두 보기</div>
                  </div>
                  <div className="storyBoxIdBox">
                    <div className="storyBoxIdBoxIconOne"></div>
                    <div className="storyBoxIdBoxIdOne">
                      dog1
                      <br />
                      15분 전
                    </div>
                  </div>
                  <div className="storyBoxIdBox">
                    <div className="storyBoxIdBoxIconTwo"></div>
                    <div className="storyBoxIdBoxIdTwo">
                      dog2
                      <br />
                      30분 전
                    </div>
                  </div>
                  <div className="storyBoxIdBox">
                    <div className="storyBoxIdBoxIconThree"></div>
                    <div className="storyBoxIdBoxIdThree">
                      dog3
                      <br />
                      2시간 전
                    </div>
                  </div>
                </div>
                <div className="recommendBox">
                  <div className="recommendUp">
                    <div className="recommendUpLeft">회원님을 위한 추천</div>
                    <div className="recommendUpRight">모두 보기</div>
                  </div>
                  <div className="recommendUpIdBox">
                    <div className="recommendUpIdBoxIconOne"></div>
                    <div className="recommendUpIdBoxIdOne">dog4</div>
                    <div className="recommendUpIdBoxFollowOne">팔로우</div>
                  </div>
                  <div className="recommendUpIdBox">
                    <div className="recommendUpIdBoxIconTwo"></div>
                    <div className="recommendUpIdBoxIdTwo">dog5</div>
                    <div className="recommendUpIdBoxFollowTwo">팔로우</div>
                  </div>
                  <div className="recommendUpIdBox">
                    <div className="recommendUpIdBoxIconThree"></div>
                    <div className="recommendUpIdBoxIdThree">dog6</div>
                    <div className="recommendUpIdBoxFollowThree">팔로우</div>
                  </div>
                </div>
                <div className="contact">
                  <div className="contactBox">
                    {AsideData.map(aside => {
                      return <Aside key={aside.id} list={aside.list} />;
                    })}
                  </div>
                  <br />
                  <br />@ 2019 INSTAGRAM
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </React.Fragment>
  );
}
export default MainJung;
