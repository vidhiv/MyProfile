import React from 'react';
import myprofile from "./assets/images/background.jpeg";
import myprofile2 from "./assets/images/vvora.jpeg";

function Knowme() {
    let know = <section id="home">
    <div className="container-fluid">
      <div className="banner row" id="banner">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-content-center"  >
          <div className="">
            <img src={myprofile} className="w-100" alt="VidhiVora" />
          </div>
        </div>
        <div className="row" id="bannerText">
          <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
          <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 justify-content-center">
            <img src={myprofile2} className="img-fluid w-60 rounded-circle img-thumbnail" alt="vidhivora" />
            <h1>I'm Vidhi Vora</h1>
            <p>Software Engineer | Full Stack Developer | Backend Developer</p>
            <a className="btn btn-theme" id="knowme" aria-current="page" href="#aboutme">Know me Better!</a>
          </div>

          <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
        </div>
        <nav className="slides-pagination"></nav>
      </div>

    </div>
  </section>;
    return <> {know};  </>
}

export default Knowme;