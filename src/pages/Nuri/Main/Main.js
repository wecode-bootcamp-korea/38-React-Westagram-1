import './Main.scss';
import { useState } from 'react';

import Header from './components/Header';
import Feed from './components/Feed';
import Story from './components/Story';
import Recommendation from './components/Recommendation';
import Footer from './components/Footer';

function Main() {
  return (
    <div className="Main">
      <Header />
      <main>
        <Feed />
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
