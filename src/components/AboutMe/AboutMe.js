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
    this.state = {
      transitionOnMount: true,
    }
    this.toggleShowResume = this.toggleShowResume.bind(this);
  }

  componentDidMount () {
    setTimeout(() => this.setState({transitionOnMount: false}), 0)
  }
  /**
   * Toggle
   * @return {void}
   */
  toggleShowResume () {
    this.props.resume === true ? this.props.setShowResume(false) : this.props.setShowResume(true);
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    let showResume = this.props.resume && this.props.resume === true;

    return (
      <div>
        <Button
          bsClass={showResume ? style.shown2 : style.hidden2}
          onClick={this.toggleShowResume}
          disabled={showResume ? false : true}>
          Close
        </Button>
        <Button
          bsClass={showResume || this.state.transitionOnMount ? style.hidden1 : style.shown1}
          onClick={this.toggleShowResume}
          disabled={showResume ? true : false}>
          Get To Know Me
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resume: state.shouldShowResume || {},
})
 
const mapDispatchToProps = dispatch => ({
  setShowResume: shouldShow => dispatch(setShowResume(shouldShow))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)
