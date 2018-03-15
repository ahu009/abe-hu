import React from 'react';
import style from './NavBar.scss';

import SocialMedia from './SocialMedia/SocialMedia';
import NavItems from './NavItems/NavItems';
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
    return (
      <div className={style.container}>
        <p> hello </p>
        <SocialMedia />
        <NavItems />
      </div>
    );
  }
}

export default NavBar;
