import React, { useState, useEffect } from 'react';
import './Main.scss';
import ReplyChoi from './Reply.js';
import Nav from '../../../components/Nav/Nav.js';
import { FOOTER_LIST } from './FOOTER_LIST';

function MainChoi() {
  const [commentsValue, setCommentsValue] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('/data/data.json')
        .then(response => response.json())
        .then(result => setUsers(result));
    }, []);

    return (
      <div className="wrapper">
        <Nav />
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
              {commentsList.map((comment, index) => (
                <ReplyChoi key={index} comment={comment} />
              ))}
              <div className="reply-input">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    let comments = [
                      ...commentsList,
                      {
                        id: Date.now(),
                        text: commentsValue,
                        like: false,
                      },
                    ];
                    setCommentsList(comments);
                    setCommentsValue('');
                  }}
                >
                  <input
                    className="reply-input-input"
                    id="reply-input"
                    onChange={e => {
                      setCommentsValue(e.target.value);
                    }}
                    value={commentsValue}
                  />
                  <button className="reply-input-button" id="reply-button">
                    게시
                  </button>
                </form>
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
                    <img
                      src={require('../../../assets/Choi/catisrunning.png')}
                    />
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
            <ul className="footer">
              {FOOTER_LIST.map(footerList => {
                return <li key={footerList.id}>{footerList.footerName}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // Reply.map;(function(a, i)){
  //   return adf
  // }
  // const Reply = () => {
  //   return (
  //     <div>
  //       <div>asdasdasd</div>
  //     </div>
  //   );
  // };
}
export default MainChoi;
