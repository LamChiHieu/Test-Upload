import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a computer programmer graduate student from FPT with developer as my major</p> 
                    <p>I am complete extrovert and I love animals</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-display2" />
                </span>
                <div className="desc">
                    <h3>Front-end </h3>
                    <p>Javascript, ReactJS, Bootstrap,...</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Back-end</h3>
                    <p>NodeJs, PHP,...</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-disc" />
                </span>
                <div className="desc">
                    <h3>Programming</h3>
                    <p>C#, Powerbuilder,...</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-device-phone" />
                </span>
                <div className="desc">
                    <h3>Mobile Dev</h3>
                    <p>Swift,...</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Database</h3>
                    <p>Sql Server, MySQL, Oracle, Mongo,...</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
