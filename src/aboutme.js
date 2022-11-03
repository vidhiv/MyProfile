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
            <p>Software Engineer | Full Stack/ Backend Developer</p>
          </h3>
          <p>Hi...</p>
          <p>I am Vidhi Vora, a Computer Science Graduate with an experience in Full Stack development | Currently looking for Full-time opportunities in the Software development field.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Degree:</strong> MS in
                  Computer Science</li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Phone:</strong> +1 (669)
                  235 0525</li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Location:</strong> California, USA</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Email:</strong> vidhi.v92@gmail.com</li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Available:</strong> Full
                  time (Immediate Joining)
                </li>
                <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <strong>Profile:</strong> <a title = "GitHub" href="https://github.com/vidhiv" target="_blank" rel="noreferrer" className="btn social-icon button" data-abc="true"><i className="fa fa-github-alt btn-round"></i> GitHub</a>|
                <a title="LinkedIn" href="https://www.linkedin.com/in/vidhi-vora/" target="_blank" rel="noreferrer" className="btn social-icon button" data-abc="true"><i className="fa fa-linkedin btn-round"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <p>
            I graduated in Spring 2022 with Masters in Computer Science from California State University - East Bay.
          </p>
          <p>
            <a target="_blank" rel="noreferrer" href="https://media-exp1.licdn.com/dms/document/D562DAQFKosR4TUHCcA/profile-treasury-document-pdf-analyzed/0/1667433660105?e=1668643200&v=beta&t=8fjDR7x8QbwRxpOVRqyMTh1q-Z-OefczFOdjGxFM8xg" className="btn btn-outline-theme">Resume (PDF)</a>
          </p>
        </div>
      </div>
    </div>
  </section>;

    return <> {content};  </>
}

export default Aboutme;