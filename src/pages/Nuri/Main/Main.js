import { useState, useEffect } from 'react';
import './Main.scss';
// import Header from './components/Header';
import Nav from '../../../components/Nav/Nav';
import Feed from './components/Feed';
import Story from './components/Story';
import Recommendation from './components/Recommendation';
import Footer from './components/Footer';

function Main() {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('../src/pages/Nuri/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);
  return (
    <div className="Main">
      <Nav />
      {/* <Header /> */}
      <main>
        <div className="feedWrap">
          {feedList && feedList.map(feed => <Feed feed={feed} key={feed.id} />)}
        </div>
        <div className="main_right">
          <Story />
          <Recommendation />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Main;
