import React from 'react';
import style from './Name.scss';

import { setShowResume } from '../../actions';

/**
 * UI Component
 * @type {Class}
 */
class Name extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.state = {
      transitionOnMount: true,
    }
  }

  componentDidMount () {
    setTimeout(() => this.setState({transitionOnMount: false}), 50);
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div className={this.state.transitionOnMount ? style.hidetitlebox : style.titlebox}><span>Abe Hu</span></div>
    );
  }
}

 
export default Name
