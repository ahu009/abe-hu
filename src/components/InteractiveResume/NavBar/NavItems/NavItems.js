import React from 'react';
import { connect } from 'react-redux'

import style from './NavItems.scss';
import { setActiveTab } from '../../../../actions';

/**
 * UI Component
 * @type {Class}
 */
class NavItems extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.toggleShowResume = this.toggleShowResume.bind(this);
  }

  /**
   * Toggle
   * @return {void}
   */
  toggleShowResume () {
    // this.props.setShowResume(true).then(() => console.log(this.props.resume));
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    let activeTab = this.props.resume.active;

    return (
      <div className={style.container}>
        <hr className={style.fancy_line}></hr>
        <ul className={style.list}>
          <li><a className={activeTab === 'about' ? style.active : style.inactive} onClick={() => this.props.setActiveTab('about')}>About Me</a></li>
          <li><a className={activeTab === 'experience' ? style.active : style.inactive} onClick={() => this.props.setActiveTab('experience')}>Experience</a></li>
          <li><a className={activeTab === 'projects' ? style.active : style.inactive} onClick={() => this.props.setActiveTab('projects')}>Projects</a></li>
          <li><a className={activeTab === 'skills' ? style.active : style.inactive} onClick={() => this.props.setActiveTab('skills')}>Skills</a></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resume: state || {},
})
 
const mapDispatchToProps = dispatch => ({
  setActiveTab: active => dispatch(setActiveTab(active))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(NavItems)
