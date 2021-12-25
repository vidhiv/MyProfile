import React from 'react';
import myprofile2 from "./assets/images/vvora.jpeg";

function Aboutme() {
    let content = <section className="coloredRow" id="aboutme">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5" data-aos="fade-right">
          <img src={myprofile2} className="img-fluid w-100" alt="" />
        </div>
        <div className="col-lg-5 pt-4 pt-lg-0 content" data-aos="fade-left" style={{paddingLeft: '2em'}}>
          <h3>
            <p>Software Developer / Web Developer</p>
          </h3>
          <p>Hi...</p>
          <p>I am Vidhi Vora, a Computer Science Graduate Student with experience as a Software Developer | Web
            Developer in Finance and
            E-Commerce domain now looking for opportunities in Software development Area.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Degree:</strong> MS in
                  Computer Science</li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Phone:</strong> +1 (669)
                  235 0525</li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Location:</strong>
                  California, USA</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Email:</strong>
                  vidhi.v92@gmail.com</li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Available:</strong> Full
                  time/ Part time/
                  Internship
                </li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Profile:</strong> <a title = "GitHub" href="https://github.com/vidhiv" target="_blank" rel="noreferrer" className="btn social-icon button" data-abc="true"><i className="fa fa-github-alt btn-round"></i> GitHub</a>|
                <a title="LinkedIn" href="https://www.linkedin.com/in/vidhi-vora/" target="_blank" rel="noreferrer" className="btn social-icon button" data-abc="true"><i className="fa fa-linkedin btn-round"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <p>
            I am currently pursuing my Masters in Computer Science from California State University - East Bay and
            intent to graduate in Spring 2022.
          </p>
          <p>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vidhi-vora/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAA3suV8BIGQaWPpS9sAfKswMnGjbVmCOSyo,1609887645414)/" className="btn btn-outline-theme">Resume (PDF)</a>
          </p>
        </div>
      </div>
    </div>
  </section>;

    return <> {content};  </>
}

export default Aboutme;