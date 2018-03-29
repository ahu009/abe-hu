import React from 'react';

import style from './Experience.scss';
import intuit from './assets/intuit.png';
import marklogic from './assets/marklogic.png';
import nebula from './assets/nebula.png';
import idtech from './assets/idtech.png';
import SI from './assets/SI.jpg';

/**
 * UI Component
 * @type {Class}
 */
class Experience extends React.Component {
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
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div>
        <div className={style.titlebox}><span>My Professional Journey</span></div>
        <div className={this.state.transitionBody ?
            this.props.isMobile ?
              style.educationMobile : style.education
            : style.educationHide}>
          <img alt='Intuit' className={style.intuit} src={SI} />
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> UCR Academic Resource Center </p>
            <p style={{color: '#679369'}}> Supplemental Instruction Leader </p>
            <p> Classes instructed: </p>
            <div style={{marginLeft: 20}}>
              <li> Intro to Programming </li>
              <li> Object-Oriented Programming </li>
              <li> Data Structures </li>
            </div>
          </div>
        </div>

        <div className={this.state.transitionBody ?
            this.props.isMobile ?
              style.educationMobile : style.education
            : style.educationHide}>
          <img alt='Intuit' className={style.intuit} src={intuit} />
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> Intuit </p>
            <p style={{color: '#679369'}}> Software Engineer 1, 2018 </p>
            <p style={{color: '#679369'}}> Software Engineering Intern, 2017</p>
            <p> Full Stack Developer for Intuit Turbotax </p>
          </div>
        </div>

        <div className={this.state.transitionBody ?
            this.props.isMobile ?
              style.educationMobile : style.education
            : style.educationHide}>
          <img alt='Intuit' className={style.intuit} src={marklogic} />
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> MarkLogic </p>
            <p style={{color: '#679369'}}> Engineering Intern, 2016 </p>
            <p> Test automation for NoSQL Database software </p>
          </div>
        </div>

        <div className={this.state.transitionBody ?
            this.props.isMobile ?
              style.educationMobile : style.education
            : style.educationHide}>
          <img alt='Intuit' className={style.intuit} src={nebula} />
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> Nebula Bay </p>
            <p style={{color: '#679369'}}> QA Automation Intern, 2016 </p>
            <p> Development and Maintenance of Test Harness/Framework </p>
          </div>
        </div>

        <div className={this.state.transitionBody ?
            this.props.isMobile ?
              style.educationMobile : style.education
            : style.educationHide}>
          <img alt='Intuit' className={style.intuit} src={idtech} />
          <div className={style.aboutText2}>
            <p className={style.schoolTitle}> iD Tech </p>
            <p style={{color: '#679369'}}> Programming Instructor, 2015 </p>
            <p> Courses Taught: </p>
            <div style={{marginLeft: 20}}>
              <li> Programming with Arduino </li>
              <li> C++ Programming </li>
              <li> Java Programming </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
