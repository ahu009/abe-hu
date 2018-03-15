import React from 'react';

import style from './App.scss';
import AboutMe from './../AboutMe';
import NavBar from './../InteractiveResume/NavBar';
import InfoDisplay from './../InteractiveResume/InfoDisplay';
import Name from './../Name/Name';
import YosemiteAndMe from './assets/test.jpg';

/**
 * App Component
 * @type {Class}
 */
class App extends React.Component {
  /**
   * Render function for App Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div className={style.container}>
        <img alt='It is me' className={style.me} src={YosemiteAndMe} />
        <Name />
        <AboutMe />
        <NavBar />
        <InfoDisplay className={style.infotab} />
      </div>
    );
  }
}

export default App
