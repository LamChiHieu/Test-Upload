import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Lâm Chí Hiếu</a></h1>
              <div style={{ color: 'white' }}><span className="email"><i className="icon-mail"></i>lamchihieu.vnn@gmail.com</span></div>
              <div style={{ color: 'white' }}><span className="phone"><i className="icon-phone"></i> 09779923 23</span></div>
            </div>





          </aside>
        </div>
      </div>
    )
  }
}
