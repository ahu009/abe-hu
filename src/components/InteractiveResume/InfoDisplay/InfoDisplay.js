import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';


import style from './InfoDisplay.scss';

import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

/**
 * UI Component
 * @type {Class}
 */
class InfoDisplay extends React.Component {

  componentDidMount() {
    var display = document.getElementById("wtfamidoing");
    display.scrollIntoView({block: 'end',  behavior: 'smooth'});
  }

  componentDidUpdate() {
    window.onbeforeunload = () => {
      var display = document.getElementById("wtfamidoing2");
      display.scrollIntoView({block: 'end',  behavior: 'smooth'});
    }
    var display = document.getElementById("wtfamidoing");
    display.scrollIntoView({block: 'end',  behavior: 'smooth'});
  }
  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    const duration = 500;

    const defaultStyle = {
      transition: `all ${duration}ms ease-in-out`,
      opacity: 0,
      left: 0,
      width: '100%',
      position: 'absolute',
    };

    const transitionStyles = {
      entering: { opacity: 0, paddingLeft: 20, left: 1},
      entered: { opacity: 1, paddingLeft: 0, left: 0},
      exiting: { opacity: 0, paddingRight: 20, left: -1}
    };

    return (
      <div>
      <div id="wtfamidoing"></div>
      {
        this.props.resume.isMobile ?
          <div className={this.props.resume.shouldShowResume && this.props.resume.shouldShowResume === true ? style.showContainerMobile : style.containerMobile}>
            <About isMobile={this.props.resume.isMobile}/>
            <Experience />
            <Projects />
            <Skills />
          </div>
          : <div className={this.props.resume.shouldShowResume && this.props.resume.shouldShowResume === true ? style.showContainer : style.container}>
            <Transition in={this.props.resume.active === "experience"}
              timeout={duration}
              unmountOnExit>
              {(state) => (
                <div style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                  <Experience />
                </div>
              )}
            </Transition>
              <Transition in={this.props.resume.active === "about"}
                timeout={duration}
                unmountOnExit>
                {(state) => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    <About isMobile={this.props.resume.isMobile}/>
                  </div>
                )}
              </Transition>
              <Transition in={this.props.resume.active === "projects"}
                timeout={duration}
                unmountOnExit>
                {(state) => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    <Projects />
                  </div>
                )}
              </Transition>
              <Transition in={this.props.resume.active === "skills"}
                timeout={duration}
                unmountOnExit>
                {(state) => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    <Skills />
                  </div>
                )}
              </Transition>
          </div>
      }
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  resume: state || {},
})

export default connect(mapStateToProps)(InfoDisplay)
