import React from 'react';
import { connect } from 'react-redux'
import { toggleIsMobile } from '../../actions';
import _ from 'underscore';

import style from './App.scss';
import AboutMe from './../AboutMe';
import NavBar from './../InteractiveResume/NavBar';
import InfoDisplay from './../InteractiveResume/InfoDisplay';
import Name from './../Name/Name';
import YosemiteAndMe from './assets/test.jpg';

/**
 * App Component
 * @type {Class}
 */
class App extends React.Component {

  constructor (props) {
    super(props);
    this.throttledResize = _.throttle(this.resize.bind(this), 200);
  }

  componentDidMount() {
    window.addEventListener("resize", this.throttledResize);
    this.throttledResize();
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
        <img alt='It is me' className={style.me} src={YosemiteAndMe} />
        <Name />
        <AboutMe />
        <NavBar />
        <InfoDisplay className={style.infotab} />
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
