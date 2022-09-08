import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import TopNav from './components/TopNav.jsx';
import CallsDisplayList from './components/CallsDisplayList.jsx'
import BottomNav from './components/BottomNav.jsx';
import DialPad from './components/DialPad.jsx';
import Contact from './components/Contact.jsx';
import Setting from './components/Setting.jsx';

const App = () => {

  const [content, setContent] = useState('inbox')

  return (
    <div className='container'>

      <div className='container-view-wrapper'>
        <Header />
        <TopNav setContent={setContent} content={content} />
        <div className="container-view">
          <CallsDisplayList content={content} setContent={setContent} />
          {content === 'dialPad' && <DialPad />}
          {content === 'contact' && <Contact />}
          {content === 'setting' && <Setting />}

        </div>
      </div>

      <div className='bottom-nav-wrapper'>
        <BottomNav setContent={setContent} content={content}/>
      </div>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
