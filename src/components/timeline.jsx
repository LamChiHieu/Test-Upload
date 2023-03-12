import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">            
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">

              <div style={{marginTop: '-10%', marginLeft: '-5%'}}>
                 <img src='../images/cat.png' width="25%" />
                </div>


                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <img src='../images/logo3a.png' width="100%" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at the AAA Assurance <span>(May/2022-Present)</span></h2>
                        <p>Website: <a href="https://www.aaa.com.vn/" target="_blank"> https://www.aaa.com.vn/ </a></p> 
                        <p>Job/Project Experience: ... </p> 
                        <p>Technologies: ... </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                      <img src='../images/logofb.png' width="90%" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at the Fubon Insurance <span>(2015-May/2022)</span></h2>
                        <p>Website: <a href="https://www.fubonins.com.vn/" target="_blank"> https://www.fubonins.com.vn/ </a></p> 
                        <p>Job/Project Experience: Build applications, reports for internal company. Develop mobile apps in iOS.</p>
                        <p>Technologies: Powerbuilder, C#, Oracle, Swift, Mongo,... </p>  
                        <video width="100%" height="100%" controls autoplay style={{ border: '1px solid black' }}>
                          <source src="../videos/fb.mp4" />
                        </video>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <img src='../images/logohs.png' width="100%" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer vs Teacher at the Hoa Sen high school <span>(2013-2015)</span></h2>
                        <p>Website: <a href="https://trunghochoasen.com/" target="_blank"> https://trunghochoasen.com/ </a></p> 
                        <p>Job/Project Experience: Teaching informatics and handle building school website. </p> 
                        <p>Technologies: PHP, MySQL, Javascript, CSS, HTML,.... </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <img src='../images/FPT_logo.png' width="100%" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduated from Aptech / Greenwich FPT Education <span>(2013)</span> </h2>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
