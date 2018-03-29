import React from 'react';
import { connect } from 'react-redux'

import style from './Projects.scss';
import CS120B from './assets/CS120B.png';
import PostPin from './assets/PostPin.png';
import Personal from './assets/Personal.png';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';




/**
 * UI Component
 * @type {Class}
 */
class Projects extends React.Component {
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
    setTimeout(() => this.setState({transitionBody: true}), 500);
  }
  /**
   * Toggle
   * @return {void}
   */
   navigate (url) {
     window.location.href = url
   }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div>
        <div className={style.titlebox}><span>My Creations</span></div>
        <div className={this.state.transitionBody ? style.education : style.educationHide}>
          <div className={style.container}>
            <img alt='DoodlyDoo' className={style.intuit} src="https://i.imgur.com/k3OP6Kf.gif" />
            <Button bsClass={style.button} onClick={() => this.navigate('https://github.com/ahu009/DoodlyDoo')}>
              Github
              <FontAwesome style={{paddingLeft: 10, fontSize: 20}}name="github-alt"/>
            </Button>
          </div>

          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> DoodlyDoo </p>
            <p style={{color: '#679369'}}> React-Native, Firebase, Bootstrap </p>
            <p> Mobile application for managing your appointments </p>
          </div>
        </div>

        <div className={this.state.transitionBody ? style.education : style.educationHide}>
          <div className={style.container}>
            <img alt='PostPin' className={style.intuit} src="https://i.imgur.com/rMnXxkj.gif" />
            <Button bsClass={style.button} onClick={() => this.navigate('https://github.com/ahu009/PostPin')}>
              Github
              <FontAwesome style={{paddingLeft: 10, fontSize: 20}}name="github-alt"/>
            </Button>
          </div>
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> PostPin </p>
            <p style={{color: '#679369'}}> React, Firebase, Bootstrap </p>
            <p> Web App for buying, selling, trading items for college students </p>
          </div>
        </div>

        <div className={this.state.transitionBody ? style.education : style.educationHide}>
          <div className={style.container}>
            <img alt='PostPin' className={style.intuit} src="https://i.imgur.com/g5qXxbP.gif" />
            <Button bsClass={style.button} onClick={() => this.navigate('https://github.com/ahu009/abe-hu')}>
              Github
              <FontAwesome style={{paddingLeft: 10, fontSize: 20}}name="github-alt"/>
            </Button>
          </div>
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> Personal Website </p>
            <p style={{color: '#679369'}}> React, Bootstrap </p>
            <p> You are looking at it right now! </p>
          </div>
        </div>

        <div className={this.state.transitionBody ? style.education : style.educationHide}>
          <div className={style.container}>
            <img alt='120' className={style.intuit} src={CS120B} />
            <Button bsClass={style.button} onClick={() => this.navigate('https://github.com/ahu009/CS120B_Final')}>
              Github
              <FontAwesome style={{paddingLeft: 10, fontSize: 20}}name="github-alt"/>
            </Button>
          </div>
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> LED Fruit Ninja </p>
            <p style={{color: '#679369'}}> C, Atmega-1284 Microcontroller  </p>
            <p> Fruit Ninja Clone on 8x8 LED Matrix and Joystick </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
