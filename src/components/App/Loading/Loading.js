import React from 'react';
import YosemiteAndMe from './../assets/test.jpg';

/**
 * UI Component
 * @type {Class}
 */
class Loading extends React.Component {
  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
        <div className="loader">
          <div className="container">
            <div className="ball ball1" />
            <div className="ball ball2" />
            <div className="ball ball3" />
          </div>
        </div>
    );
  }
}

 
export default Loading
