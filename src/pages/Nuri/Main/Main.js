import './Main.scss';
import { useState } from 'react';

function Main() {
  let [comment, setComment] = useState('');
  const onChangeComment = event => setComment(event.target.value);
  const onSubmitComment = event => {
    event.preventDefault();
  };
  return (
    <div className="Main">
      <header>
        <div className="inner_1000">
          <h1>Westagram</h1>
          <div className="search_box">
            <input placeholder="검색" type="text" />
            <span className="search_img">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <a className="search_cancel" href="#!">
              <i className="fa-solid fa-circle-xmark" />
            </a>
            <div className="balloon search_result">
              <div className="no_result">
                <h4>최근 검색 항목</h4>
                <p>최근 검색 내역 없음.</p>
              </div>
              <ul className="search_list_wrap">
                {/**<!-- 검색결과 추가될 영역 -->**/}
              </ul>
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#!" title="홈으로 이동하기">
                  <i className="fa-solid fa-house" />
                </a>
              </li>
              <li>
                <a href="#!" title="다이렉트 메세지로 이동하기">
                  <i className="fa-regular fa-paper-plane" />
                </a>
              </li>
              <li>
                <a href="#!" title="스토리 추가하기">
                  <i className="fa-regular fa-square-plus" />
                </a>
              </li>
              <li>
                <a href="#!" title="인스타그램 둘러보기">
                  <i className="fa-regular fa-compass" />
                </a>
              </li>
              <li>
                <a href="#!" title="활동 피드 내역 보기">
                  <i className="fa-regular fa-heart" />
                </a>
              </li>
              <li>
                <a href="#!" className="modal_popup" title="사용자 메뉴 보기">
                  <img src="images/Nuri/onnuri.jpeg" alt="onnuri프로필 사진" />
                </a>
              </li>
            </ul>
            <div className="bg" />
            <div className="balloon user_menu">
              <ul>
                <li>
                  <a href="#!">
                    <i className="fa-regular fa-user" />
                    <span>프로필</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fa-regular fa-bookmark" />
                    <span>저장됨</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fa-solid fa-gear" />
                    <span>설정</span>
                  </a>
                </li>
                <li>
                  <a href="#!">로그아웃</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="sec_feeds">
          <article>
            <div className="user_wrap">
              <div className="user_profile">
                <img
                  src="images/Nuri/onnuri.jpeg"
                  alt="김온누리님의 프로필사진"
                />
                <p>onnuri</p>
              </div>
              <a className="more_btn" href="#!">
                <img src="images/Nuri/more.png" alt="더보기" />
              </a>
            </div>
            <div className="picture_box">
              <img src="images/Nuri/feed_sample.jpg" alt="사과" />
            </div>
            <div className="comment_wrap">
              <div className="icon_box">
                <div className="heart_wrap">
                  <a className="like_button" href="#!">
                    <img src="images/Nuri/heart.png" alt="좋아요 누르기" />
                    <img
                      className="hide"
                      src="images/Nuri/heart_like.png"
                      alt="좋아요 완료"
                    />
                  </a>
                  <a href="#!">
                    <img src="images/Nuri/talkbox.png" alt="댓글달기" />
                  </a>
                  <a href="#!">
                    <img src="images/Nuri/share.png" alt="공유하기" />
                  </a>
                </div>
                <div className="save_wrap">
                  <a href="#!">
                    <img
                      src="images/Nuri/bookmark.png"
                      alt="내 컬렉션 추가하기"
                    />
                  </a>
                </div>
              </div>
              <div className="like_box">
                <div className="user_profile">
                  <img
                    src="images/Nuri/bomsori.jpeg"
                    alt="김봄소리님의 프로필사진"
                  />
                  <p>
                    <strong>bomsori</strong>님 <strong>여러 명</strong>이
                    좋아합니다
                  </p>
                </div>
                <p className="user_say">
                  <strong>onnuri</strong> 🍎
                </p>
                {/**<!-- 댓글 추가 되는 영역 -->**/}
                <div className="comment_list_wrap">
                  {/* <li className="add">
                <span className="comment_id">ID</span><span className="comment_con">내용</span><span className="comment_heart"><i className="fa-regular fa-heart"></i></span><a href="#!">삭제</a>
            </li> */}
                </div>
              </div>
            </div>
            <form onSubmit={onSubmitComment} className="comment_input">
              <input
                onChange={onChangeComment}
                value={comment}
                placeholder="댓글달기..."
                type="text"
              />
              <button disabled type="submit" className="comment_btn">
                게시
              </button>
            </form>
          </article>
        </div>
        <div className="main_right">
          <div className="sec_story">
            <div className="user_profile_wrap">
              <div className="img_box">
                <img src="images/Nuri/onnuri.jpeg" alt="프로필 사진" />
              </div>
              <div className="user_info">
                <p className="comment_id">onnuri</p>
                <p>Onstagram</p>
              </div>
              <a href="#!">전환</a>
            </div>
            <div className="right_wrap wrap_first">
              <div className="right_title">
                <p>스토리</p>
                <a href="#!">모두보기</a>
              </div>
              <div className="story_box">
                <ul className="right_list_wrap">
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="user_id의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">user_id</p>
                      <p>24분전</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="idonknow의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">idontknow</p>
                      <p>24분전</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="onnuri의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">onnuri</p>
                      <p>24분전</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="westagram의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">westagram</p>
                      <p>24분전</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="moreimportant_js의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">moreimportant_js</p>
                      <p>24분전</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sec_recommendation">
            <div className="right_wrap">
              <div className="right_title">
                <p>회원님을 위한 추천</p>
                <a href="#!">모두보기</a>
              </div>
              <div className="recommendation_box">
                <ul className="right_list_wrap">
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="user_id_friend의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">user_id_friend</p>
                      <p className="omission">
                        user_id님 외 2명이 팔로우 합니다
                      </p>
                    </div>
                    <a href="#!">팔로우</a>
                  </li>
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="purensol의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">purensol</p>
                      <p className="omission">
                        bomsori님 외 11명이 팔로우 합니다
                      </p>
                    </div>
                    <a href="#!">팔로우</a>
                  </li>
                  <li>
                    <div className="img_box">
                      <img
                        src="images/Nuri/onnuri.jpeg"
                        alt="westagram_wecode의 프로필 사진"
                      />
                    </div>
                    <div>
                      <p className="user_id">westagram_wecode</p>
                      <p className="omission">
                        westagram님 외 3명이 팔로우 합니다
                      </p>
                    </div>
                    <a href="#!">팔로우</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer">
            <ul className="footer_list_wrap">
              <li>
                <a href="#!">소개</a>
              </li>
              <li>
                <a href="#!">도움말</a>
              </li>
              <li>
                <a href="#!">홍보 센터</a>
              </li>
              <li>
                <a href="#!">API</a>
              </li>
              <li>
                <a href="#!">채용 정보</a>
              </li>
              <li>
                <a href="#!">개인정보처리방침</a>
              </li>
              <li>
                <a href="#!">약관</a>
              </li>
              <li>
                <a href="#!">위치</a>
              </li>
              <li>
                <a href="#!">언어</a>
              </li>
            </ul>
            <p>© 2022 INSTAGRAM FROM META</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
