function Story() {
  return (
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
                <img src="images/Nuri/onnuri.jpeg" alt="onnuri의 프로필 사진" />
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
  );
}

export default Story;
