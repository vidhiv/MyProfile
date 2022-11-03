import React from 'react';
import doodlersclub from './assets/images/doodlersclub.jpg';
import fitnessfinder from './assets/images/fitnessfinder.jpg';
import studymate from './assets/images/studymate.jpg';
import profile from './assets/images/profile.jpg';
import healthcdb from './assets/images/healthcdb.jpg';
import stockanalytics from './assets/images/stockanalytics.jpg';

function Education() {
    let content = <section className="sectionedCSS" id="projects">
    <div className="container-fluid">
      <div className="row">
        <h1>&nbsp;</h1>
      </div>
      <div className="section-title">
        <h3>Projects</h3>
      </div>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
            aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner justify-content-center">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="row d-flex">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
              <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <img src={doodlersclub} className="w-100 img-fluid" alt="TheDoodlersClub" />
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h5>Doodlers Club</h5>
                  <p>A simple react application which allows a member to log in and access the activities
                    information
                    along with the admin panel which adds and deletes the activities and members information</p><br/>
                  <p>The access/edit of all activities and member information was implemented via
                    API</p><br/>
                  <p><strong>Technology Stack : </strong>React JS, Node JS, Express JS, NeDB, CSS</p>
                  <p><a href="https://vidhiv.github.io/TheDoodlersClub/" target="_blank" rel="noreferrer"
                      className="btn btn-outline-theme">View App!!!</a></p><br/><br/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="row d-flex">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
              <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <img src={studymate} className="img-fluid" alt="StudyMate" />
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h5>StudyMate (Final year project for masters)</h5>
                  <p>StudyMate is a cloud ML based web application serving as a one 
                    stop solution to revolutionize online education by helping students 
                    find buddies with similar preferences, share resources and create 
                    study groups to help and motivate the learning community with the 
                    ease of accessibility and affordability to all</p>
                  <p><strong>Technology Stack : </strong>AWS EC2, AWS RDS, AWS S3, Node JS, Python, MySQL, HTML, CSS3 (Bootstrap)</p>
                  <p></p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="row d-flex">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
              <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <img src={fitnessfinder} className="img-fluid" alt="FitnessFinder" />
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h5>FitnessFinder</h5>
                  <p>The goal of this application is to bring people with shared interests together so that they can
                    help and motivate each other to get fit. FitnessFinder lets users choose their workout and
                    personal
                    goals to help them find nearby people that will join them in their journey. Workouts include
                    various
                    indoor activities such as gym, yoga, meditation, etc and outdoor activities like hiking or
                    sports
                    games with an effort to reach out to a wide span of audience and having something for everyone
                  </p>
                  <p>FitnessFinder also offers features like finding and posting events, sending workout request and
                    sending chat messages</p>
                  <p><strong>Technology Stack : </strong>Node JS, Express JS, MySQL, HTML, CSS (Bootstrap)</p>
                  <p></p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className=" row d-flex">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
              <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <img src={profile} className="img-fluid" alt="Portfolio" />
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h5>My Portfolio</h5>
                  <p>The responsive web app for my portfolio</p>
                  <p><strong>Technology Stack : </strong>React JS, HTML, CSS (Bootstrap)</p>
                  <p><a href="https://vidhiv.github.io/MyProfile" target="_blank" rel="noreferrer" className="btn btn-outline-theme">View App!!!</a></p><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="row d-flex">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
              <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <img src={stockanalytics} className="img-fluid" alt="stock analytics" />
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h5>StockAnalytics</h5>
                  <p>A cloud computing course project that would predict stock prices, show correlation graphs, allow a user to do paper trading and show daily tips
                  </p>
                  <p><strong>Technology Stack : </strong>AWS EC2, AWS RDS and Billing (Cloud Services), Python, Django (Framework), HTML, CSS3</p>
                  <p><br/><br/></p>
                  <p><br/><br/></p>
                  <p><br/><br/></p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="row d-flex">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
              <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <img src={healthcdb} className="img-fluid" alt="Healthcare Organization System" />
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h5>Healthcare Organization System</h5>
                  <p>This project focuses on creating the fdatabase architecture for the health care organization
                    (EER &
                    ERD)</p>
                  <p><strong>Tools : </strong>MYSQL Workbench</p>
                  <p><a href="https://github.com/sfsu-joseo/database-systems-su21-vidhiv/blob/master/milestones/Milestone2/Health%20care%20organization%20ERD.jpg" target="_blank" rel="noreferrer" className="btn btn-outline-theme">View ERD</a> <a href="https://github.com/sfsu-joseo/database-systems-su21-vidhiv/blob/master/milestones/Milestone2/Health%20care%20organization%20EER.png" target="_blank" rel="noreferrer" className="btn btn-outline-theme">View EER</a></p><br/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="section-title">
        <h3>Experience</h3>
      </div>
      <div className="row">
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
        <div className="row col-xs-12 col-sm-6 col-md-6 col-lg-6 justify-content-center">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div><span>Mar 2022 – Oct 2022</span></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 bottompadding">
            <span className="mainSection">Software Engineer II</span> <br/>
            <span className="subSection">Lessen (Arizona, USA)</span>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div><span>Aug 2021 – May 2022</span></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 bottompadding">
            <span className="mainSection">Student Assistant</span> <br/>
            <span className="subSection">California State University - East Bay (Hayward, CA)</span>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div><span>Nov 2015 – Sep 2018</span></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 bottompadding">
            <span className="mainSection">Sr. Software Developer</span><br/>
            <span className="subSection">Samco Securities Limited (Mumbai, India)</span>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div><span>June 2013 – Nov 2015</span></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 bottompadding">
            <span className="mainSection">Software Developer</span><br/>
            <span className="subSection">Zon Software Solutions Pvt. Ltd (Mumbai, India)</span>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
      </div>
    </div>
  </section>;
    
    return <> {content};  </>
}

export default Education;