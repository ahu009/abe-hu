import React from 'react';
import style from './Name.scss';

import { setShowResume } from '../../actions';

/**
 * UI Component
 * @type {Class}
 */
class Name extends React.Component {

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div className={style.titlebox}><span>Abe Hu</span></div>
    );
  }
}

 
export default Name
