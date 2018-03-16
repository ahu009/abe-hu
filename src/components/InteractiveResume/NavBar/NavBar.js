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

const mapDispatchToProps = dispatch => ({
  setActiveTab: active => dispatch(setActiveTab(active))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
