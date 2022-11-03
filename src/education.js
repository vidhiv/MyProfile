import React from 'react';

function Education() {
    let content = <section className="coloredRow sectionedCSS" id="education">
    <div className="container-fluid">
      <div>
        <h1>&nbsp;</h1>
      </div>
      <div className="section-title">
        <h3>Education & Diplomas</h3>
      </div>

      <div className="row">
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
        <div className="row col-xs-12 col-sm-6 col-md-6 col-lg-6 justify-content-center">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div><span>Fall 2020 - Spring 2022</span></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 bottompadding">
            <span className="mainSection">Master of Science - Computer Science</span> < br/>
            <span className="subSection">California State University - East Bay (Hayward, CA)</span>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div><span>class of 2013</span></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 bottompadding">
            <span className="mainSection">Bachelor of Engineering - Computer Engineering</span>< br/>
            <span className="subSection">K.J. Somaiya College of Engineering – Mumbai University (Mumbai, India) </span>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div><span>Class of 2010</span></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <span className="mainSection">Diploma - Computer Technology</span>< br/>
            <span className="subSection">Shah and Anchor Kutchhi Polytechnic, MSBTE (Mumbai, India)</span>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
      </div>

      <div className="section-title">
        <h3>Master's Coursework</h3>
      </div>

      <div className="row">
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
        <div className="row col-xs-12 col-sm-6 col-md-6 col-lg-6 justify-content-center">
          <div className="technicalskillsheading col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h6 style={{width: '6vw', marginLeft: '42%'}}>GPA - 4.0</h6>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Web Systems</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Operating Systems</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Programming Language Concepts</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Advanced Algorithms</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>CyberSecurity</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Theory of Computation</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Software Engineering</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Database Systems</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Cloud Computing</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p>Adv. Computer Architecture</p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p></p>
          </div>
          <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <p></p>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
      </div>
    </div>
  </section>;
    
    return <> {content};  </>
}

export default Education;