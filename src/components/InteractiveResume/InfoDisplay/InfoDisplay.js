import React from 'react';
import { connect } from 'react-redux'

import style from './InfoDisplay.scss';

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
      <div className={this.props.resume && this.props.resume === true ? style.showContainer : style.container}>
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  resume: state.shouldShowResume || {},
})

export default connect(mapStateToProps)(InfoDisplay)
