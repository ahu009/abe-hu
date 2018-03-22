import React from 'react';
import style from './SocialMedia.scss';
import FontAwesome from 'react-fontawesome';

import resume from './assets/Abe_Hu_Resume.pdf';

/**
 * UI Component
 * @type {Class}
 */
class SocialMedia extends React.Component {

  navigate (url) {
    window.location.href = url
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div className={style.container}>
        <div className={style.social}>
          <FontAwesome className={style.linkedin} name="linkedin" onClick={() => this.navigate('https://www.linkedin.com/in/abe-hu-4a0b86102/')}/>
          <FontAwesome className={style.github} name="github-alt" onClick={() => this.navigate('https://github.com/ahu009')}/>
          <FontAwesome className={style.email} name="envelope" onClick={() => window.open('mailto:abehu88888@gmail.com')}/>
          <FontAwesome className={style.paperclip} name="id-card" onClick={() => window.open(resume)}/>
        </div>
      </div>
    );
  }
}
 
export default SocialMedia;
