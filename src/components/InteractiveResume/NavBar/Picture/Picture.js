import React from 'react';
import style from './Picture.scss';

import me from './assets/asdf.jpg';


/**
 * UI Component
 * @type {Class}
 */
class Picture extends React.Component {
  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div>
        <img alt='It is me' className={style.avatar} src={me} />
      </div>
    );
  }
}
 
export default Picture;
