import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { toggleIsMobile } from '../../actions';
import _ from 'underscore';
import {detect} from 'detect-browser';
const browser = detect();

import style from './App.scss';
import AboutMe from './../AboutMe';
import NavBar from './../InteractiveResume/NavBar';
import InfoDisplay from './../InteractiveResume/InfoDisplay';
import Name from './../Name/Name';
import Loading from './Loading/Loading';
import YosemiteAndMe from './assets/test.jpg';


/**
 * App Component
 * @type {Class}
 */
class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      isLoading: true,
    }
    this.throttledResize = _.throttle(this.resize.bind(this), 200);
  }

  componentDidMount() {
    window.addEventListener("resize", this.throttledResize);
    this.throttledResize();
    if (browser.name != "chrome") {
      this.setState({showModal: true});
    }
    setTimeout(() => this.setState({isLoading: false}), 50);
  }

  resize() {
    window.innerWidth <= 770 ? this.props.toggleIsMobile(true) : this.props.toggleIsMobile(false);
  }
  /**
   * Render function for App Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div className={style.container}>
      {this.state.isLoading ? <Loading /> : null}
      <img alt='It is me' className={style.me} src={YosemiteAndMe} />
      <Name />
      {
        this.state.showModal ?
          <div id="modal" className={style.modal}>
            <div className={style.modalBody}>
              <h2>Warning!</h2>
              <p>My website is optimized for Chrome. Other browsers may have weird behavior.</p>
              <Button bsClass={style.shown2} onClick={() => window.location.href="https://www.linkedin.com/in/abe-hu-4a0b86102/"}> Get Me Out Of Here </Button>
              <Button bsClass={style.shown2} onClick={() => this.setState({showModal: false})}> Let me see this atrocity </Button>
            </div>
            <div className={style.modalbg}></div>
          </div> : null
      }
      {
        !this.state.showModal ?
          <div>
            <AboutMe />
            <NavBar />
            <InfoDisplay className={style.infotab} />
          </div> : null
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resume: state || {},
}) 

const mapDispatchToProps = dispatch => ({
  toggleIsMobile: isMobile => dispatch(toggleIsMobile(isMobile))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(App)
