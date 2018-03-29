import React from 'react';

import style from './Skills.scss';

/**
 * UI Component
 * @type {Class}
 */
class Skills extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.state = {
      transitionBody: false,
    };
  }

  componentDidMount () {
    setTimeout(() => this.setState({transitionBody: true}), 1000);
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    let shouldTransition = this.state.transitionBody;
    return (
        <div>
          <div className={style.titlebox}><span>Skills</span></div>

          <div className={style.container}>
            <p className={style.skillCTG}>Languages and Frameworks</p>
          	<div className={style.wrapper}>
          		<div className={shouldTransition ? style.c : style.base}>C++</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.javaScript : style.base}>JavaScript</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.react : style.base}>React</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.reactNative : style.base}>React-Native</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.selenium : style.base}>Selenium</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.java : style.base}>Java</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.SQL : style.base}>SQL</div>
          	</div>
            <div style={{margin: 25}}> </div>
            <p className={style.skillCTG}>Others</p>
          	<div className={style.wrapper}>
          		<div className={shouldTransition ? style.Git : style.base}>Git</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.FireBase : style.base}>FireBase</div>
          	</div>
            <div className={style.wrapper}>
          		<div className={shouldTransition ? style.SVN : style.base}>SVN</div>
          	</div>
          </div>

        </div>
    );
  }
}
 

export default Skills;
