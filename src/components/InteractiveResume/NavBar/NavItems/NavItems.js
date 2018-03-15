import React from 'react';
import style from './NavItems.scss';

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

    return (
      <div className={style.container}>
        <hr className={style.fancy_line}></hr>
        <ul className={style.list}>
          <li><a onClick={() => {}}>About Me</a></li>
          <li><a onClick={() => {}}>Experience</a></li>
          <li><a onClick={() => {}}>Projects</a></li>
          <li><a onClick={() => {}}>Skills</a></li>
        </ul>
      </div>
    );
  }
}
 
export default NavItems;
