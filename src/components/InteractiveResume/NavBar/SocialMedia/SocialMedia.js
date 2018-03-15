import React from 'react';
import style from './SocialMedia.scss';
import { SocialIcon } from 'react-social-icons';


/**
 * UI Component
 * @type {Class}
 */
class SocialMedia extends React.Component {
  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div className={style.container}>
        <SocialIcon className={style.linkedin} color='#89ABCE' style={{width: 30, height: 30}} url="https://www.linkedin.com/in/abe-hu-4a0b86102/" />
        <SocialIcon className={style.github} color='#89ABCE' style={{width: 30, height: 30}} url="https://github.com/ahu009" />
      </div>
    );
  }
}
 
export default SocialMedia;
