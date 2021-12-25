import React from 'react'; //We need to import this component and render it to our root App element, so we can see it in the browser.
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import Main from './main';
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/font-awesome/css/font-awesome.css";
import "./assets/js/home";
// import "./assets/js/bootstrap.min";
import "bootstrap/dist/js/bootstrap.min"

// import "./assets/js/bootstrap_min";

class App extends React.Component {
  render() {
      return <><Header /> <Main /> <Footer /></>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);