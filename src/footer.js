import React from 'react';

function Footer() {
    let footer = <div className="container">
        <div className="row sectionedCSS">
        <div className="col-md-12 col-sm-12 center-col text-center"> 
            <a href="https://github.com/vidhiv" target="_blank" rel="noreferrer" className="btn social-icon button" data-abc="true"><i className="fa fa-github-alt btn-round"></i></a>
            <a href="https://www.linkedin.com/in/vidhi-vora/" target="_blank" rel="noreferrer" className="btn social-icon button" data-abc="true"><i className="fa fa-linkedin btn-round"></i></a>
        </div>
        <div className="col-md-12 col-sm-12 center-col text-center py-3">©2022 Vidhi Vora</div>
        </div>
    </div>;

    return <footer> {footer}; </footer>
}

export default Footer;