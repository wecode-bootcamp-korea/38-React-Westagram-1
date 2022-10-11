function Header() {
  return (
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
  );
}
export default Header;
