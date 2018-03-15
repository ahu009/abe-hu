import React from 'react';
import style from './AboutMe.scss';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';

import { setShowResume } from '../../actions';

/**
 * UI Component
 * @type {Class}
 */
class AboutMe extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.state = { clicked: true };
    this.toggleShowResume = this.toggleShowResume.bind(this);
  }

  /**
   * Toggle
   * @return {void}
   */
  toggleShowResume () {
    this.props.setShowResume(true).then(() => console.log(this.props.resume));
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    const clicked = this.state.clicked;

    return (
      <Button bsClass={style.button} onClick={this.toggleShowResume}> About Me </Button>
    );
  }
}

const mapStateToProps = state => ({
  resume: state.shouldShowResume || {},
})
 
const mapDispatchToProps = dispatch => ({
  setShowResume: shouldShow => dispatch(setShowResume(true))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)
