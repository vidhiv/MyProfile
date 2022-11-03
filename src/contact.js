import React from 'react';

function Contact() {
    let content = <section className="coloredRow sectionedCSS" id="contact">
    <div className="container-fluid">

      <div className="section-title">
        <h3>Get In Touch</h3>
      </div>

      <div className="row">
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
        <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
          <p> <i className="fa fa-map-marker"></i> California, USA</p>
          <p> <i className="fa fa-mobile"></i> +1 (669) 235 0525</p>
          <p> <i className="fa fa-envelope-o"></i> vidhi.v92@gmail.com</p>
        </div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center">
          <span className="mainSection">Shoot a message!</span>
          <div id="message"></div>
          <form method="post" action="" name="detailsform" id="detailsform">
            <label className="required">(Required)</label><input name="name" id="name" type="text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-control validatefield" required placeholder="Your name..." />
            <label className="required">(Required)</label><input name="email" id="email" type="email" required className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 form-control validatefield" placeholder="Your email..." />
            <label className="required">(Required)</label><textarea name="comments" id="comments" cols="" rows="" required className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-control validatefield" placeholder="Your message..."></textarea>
            <div style={{textAlign: 'center', marginBottom: '1em'}}>
              <input type="button" id="sendMessage" name="send" className="btn btn-theme " value="Send" />
            </div>
            <div id="simple-msg"></div>
          </form>
        </div>
        <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3 justify-content-center"></div>
      </div>
    </div>
  </section>;

    return <> {content};  </>
}

export default Contact;