function Recommendation() {
  return (
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
                <p className="omission">user_id님 외 2명이 팔로우 합니다</p>
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
                <p className="omission">bomsori님 외 11명이 팔로우 합니다</p>
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
                <p className="omission">westagram님 외 3명이 팔로우 합니다</p>
              </div>
              <a href="#!">팔로우</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
