import React from 'react';

import style from './About.scss';
import ucr from './assets/UCR.jpg';

/**
 * UI Component
 * @type {Class}
 */
class About extends React.Component {
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
    setTimeout(() => this.setState({transitionBody: true}), 1050);
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
        <div>
          <div className={style.titlebox}><span>Just your average dude</span></div>
            <div className={this.state.transitionBody ? style.education : style.educationHide}>
              <div className={style.aboutText}>
                <p>Taiwanese-American. Bay Area born and raised. </p>
                <p>5-foot-10. Watches and analyzes sports but doesn't actually play most of them.
                Lifts weights but never gets big. Also listens to mainstream music.</p>
                <p>Yeah...I'm pretty average.</p>
                <p> I was actually really scared in the background picture </p>
              </div>
            </div>
          <div className={style.titlebox}><span>Education</span></div>
          <div className={this.state.transitionBody ? style.education : style.educationHide}>
            <img alt='It is me' className={style.ucr} src={ucr} />
            <div className={style.aboutText2}>
              <p className={style.schoolTitle}> University of California, Riverside </p>
              <p style={{color: '#98937D'}}> BS Computer Science, June 2018 </p>
              <p> Major GPA: 3.8 </p>
              <p> Cumulative GPA: 3.66 </p>
              <p> 8x Deans Honor List, Chancellors Honors List </p>
            </div>
          </div>
        </div>
    );
  }
}
 

export default About;
