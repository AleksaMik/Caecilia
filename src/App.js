import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render () {
      return (
          <div className = "App">
              <Header/>
              <Footer/>
              <About/>
          </div>
      );
  }
}
export default App 