import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import BackToTop from './components/BackToTop';
import ZaloChat from './components/ZaloChat';
import Hpny from './components/hpny';

class App extends Component {
  render() {
    return (
      <div>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>

            <div id="colorlib-main">
              <img src='../images/Maintenance.png' width="90%" />
            </div>

          </div>
        </div>
        <BackToTop />
        <ZaloChat />
      </div>
    );
  }
}

export default App;
