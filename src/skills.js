import React from 'react';
import mysql from './assets/images/mysql.png';
import mongodb from './assets/images/mongodb.png';
import nedb from './assets/images/nedb.png';
import java from './assets/images/java.png';
import php from './assets/images/php.png';
import python from './assets/images/python.png';
import html from './assets/images/html.png';
import js from './assets/images/js.png';
import css from './assets/images/css.png';
import react from './assets/images/react.png';
import node from './assets/images/node.png';
import svn from './assets/images/svn.png';
import git from './assets/images/git.png';
import aws from './assets/images/aws.png';
import codeigniter from './assets/images/codeigniter.png';
import django from './assets/images/django.png';

function Skills() {
    let content = <section className="sectionedCSS" id="skills">
    <div className="container-fluid">
      <div>
        <h1>&nbsp;</h1>
      </div>
      <div className="section-title">
        <h3>Technical Skills</h3>
      </div>

      <div className="row technicalskillsheading">
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center"></div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center">
          <h6>Database</h6>
        </div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center"></div>
      </div>
      <div className="row">
        <div className=" col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
        <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center">
            <img src= {mysql} className="img-fluid " alt="mysql" />
            <p>MySQL</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={mongodb} className="img-fluid " alt="mongodb" />
            <p>MongoDb</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={nedb} className="img-fluid " alt="nedb" />
            <p>NeDB</p>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
      </div>

      <div className="row technicalskillsheading">
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center"></div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center">
          <h6>Web development and Programming</h6>
        </div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center"></div>
      </div>
      <div className="row">
        <div className=" col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
        <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={java} className="img-fluid " alt="java" />
            <p>Java</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={php} className="img-fluid " alt="php" />
            <p>PHP</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={python} className="img-fluid " alt="python" />
            <p>Python (Beginner)</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={html} className="img-fluid " alt="html" />
            <p>HTML5</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={js} className="img-fluid " alt="js" />
            <p>Javascript</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={css} className="img-fluid " alt="css" />
            <p>CSS3 / Bootstrap (Beginner)</p>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
      </div>

      <div className="row technicalskillsheading">
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center"></div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center">
          <h6>Technologies​ and Frameworks</h6>
        </div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 justify-content-center"></div>
      </div>
      <div className="row">

        <div className=" col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
        <div className="row col-xs-12 col-sm-8 col-md-8 col-lg-8 justify-content-center">
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={aws} className="img-fluid " alt="codeigniter" />
            <p>AWS (EC2 & RDS)</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={react} className="img-fluid " alt="react" />
            <p>React JS</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={node} className="img-fluid " alt="node" />
            <p>Node JS</p>
          </div>
          {/* <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={svn} className="img-fluid " alt="svn" />
            <p>SVN</p>
          </div> */}
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={git} className="img-fluid " alt="git" />
            <p>GIT</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={codeigniter} className="img-fluid " alt="codeigniter" />
            <p>CodeIgniter</p>
          </div>
          <div className="technicalskills col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src={django} className="img-fluid " alt="codeigniter" />
            <p>Django (Beginner)</p>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-2 col-md-2 col-lg-2 justify-content-center"></div>
      </div>
    </div>
  </section>;

    return <> {content};  </>
}

export default Skills;