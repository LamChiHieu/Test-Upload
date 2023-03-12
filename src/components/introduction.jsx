import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/img_slider_1.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className='H-shadow' style={{ color: 'White' }}> Hi! <br />I'm Hiếu </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li style={{ backgroundImage: 'url(images/img_slider_2.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className='H-shadow' style={{ color: 'White' }}>AAA Assurance!</h1>
                          {/* 
                          <p><a className="btn btn-primary btn-learn" href="https://www.aaa.com.vn/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>View Website<i className="icon-download4" /></a></p>
                          */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li style={{ backgroundImage: 'url(images/img_slider_3.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className='H-shadow' style={{ color: 'White' }}>Blood Donation Activity!</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div style={{ paddingLeft: '65%' }}>
            <img src='../images/tet.png' width="100%" />
          </div>

        </section>
      </div>
    )
  }
}
