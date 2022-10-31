import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';


class Header extends Component {
  render() {
    return (
      <Navigate>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/" element={<Navigate to= "/" />}/>
        </div>
      </Navigate>
    );
  }
}

export default Header;
