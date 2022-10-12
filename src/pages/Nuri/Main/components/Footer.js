import { Link } from 'react-router-dom';

const FOOTER_LIST = [
  { id: 1, content: '소개', url: '/intro' },
  { id: 2, content: '도움말', url: '/help' },
  { id: 3, content: '홍보 센터', url: '/promotion' },
  { id: 4, content: 'API', url: '/api' },
  { id: 5, content: '채용 정보', url: '/recruitment' },
  { id: 6, content: '개인정보처리방침', url: '/info' },
  { id: 7, content: '약관', url: '/terms' },
  { id: 8, content: '위치', url: '/location' },
  { id: 9, content: '언어', url: '/langauge' },
];

function Footer() {
  return (
    <div className="footer">
      <ul className="footer_list_wrap">
        {FOOTER_LIST.map(list => {
          return (
            <li key={list.id}>
              <Link to={list.url}>{list.content}</Link>
            </li>
          );
        })}
      </ul>
      <p>© 2022 INSTAGRAM FROM META</p>
    </div>
  );
}

export default Footer;
