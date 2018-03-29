import React from 'react';
import { connect } from 'react-redux'

import style from './NavBar.scss';
import SocialMedia from './SocialMedia/SocialMedia';
import NavItems from './NavItems/NavItems';
import Picture from './Picture/Picture';
import { setActiveTab } from '../../../actions';

/**
 * UI Component
 * @type {Class}
 */
class NavBar extends React.Component {
  componentWillMount () {
    this.props.setActiveTab('about');
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div>
      {
        this.props.resume.isMobile ?
        <div className={this.props.resume.shouldShowResume && this.props.resume.shouldShowResume === true ? style.showMobileNav : style.mobileNav}>
          <Picture />
          <SocialMedia isMobile={this.props.resume.isMobile}/>
        </div> :
        <div className={this.props.resume.shouldShowResume && this.props.resume.shouldShowResume === true ? style.showContainer : style.container}>
          <Picture />
          <SocialMedia />
          <NavItems />
        </div>
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
