import React from 'react';
import { connect } from 'react-redux'

import style from './NavBar.scss';
import SocialMedia from './SocialMedia/SocialMedia';
import NavItems from './NavItems/NavItems';
import Picture from './Picture/Picture';
/**
 * UI Component
 * @type {Class}
 */
class NavBar extends React.Component {
  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    console.log(this.props.resume);
    return (
      <div className={this.props.resume && this.props.resume === true ? style.showContainer : style.container}>
        <Picture />
        <SocialMedia />
        <NavItems />
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  resume: state.shouldShowResume || {},
})

export default connect(mapStateToProps)(NavBar)
