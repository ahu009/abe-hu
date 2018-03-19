import React from 'react';
import { connect } from 'react-redux'

import style from './InfoDisplay.scss';

import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

/**
 * UI Component
 * @type {Class}
 */
class InfoDisplay extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.state = { clicked: true };
    this.toggle = this.toggle.bind(this);
  }

  /**
   * Toggle
   * @return {void}
   */
  toggle () {
    // this.setState({clicked: !this.state.clicked});
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div className={this.props.resume.shouldShowResume && this.props.resume.shouldShowResume === true ? style.showContainer : style.container}>
        {this.props.resume.active === 'about' ? <About /> : null}
        {this.props.resume.active === 'experience' ? <Experience /> : null}
        {this.props.resume.active === 'projects' ? <Projects /> : null}
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  resume: state || {},
})

export default connect(mapStateToProps)(InfoDisplay)
