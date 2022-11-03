import React from 'react';
import Knowme from './knowme';

function Header() {
    let headercontent = <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
    <ul className="navbar-nav mb-2 mb-lg-0 nav-pills nav-fill">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="knowmebetter" aria-current="page" href="#aboutme">About Me!</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#education">Education & Diplomas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects & Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>

    </ul>
  </div>;
    let header = <div className="menu">
        <nav id="stickmenu" className="navbar navbar-expand-lg navbar-light bg-light firstpage fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                {headercontent}
            </div>
        </nav>
    </div>;

    let menu = <header>{header}<Knowme /></header>;
    return <header>
        {menu}
    </header>;
}

export default Header;