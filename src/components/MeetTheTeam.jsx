import Header from './Header'
import AboutUs from '../assets/about-us.png'
import Logo from './Logo';
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg'
import TeamMember from './TeamMember'
import brian from '../assets/headshots/brian.jpg'
import erik from '../assets/headshots/erik.jpg'
import ian from '../assets/lan.jpg'
import preston from '../assets/headshots/preston.jpg'
import jeff from '../assets/headshots/jeff.jpg'
import mike from '../assets/headshots/mike.jpg';
import momin from '../assets/headshots/momin.jpg';
import bob from '../assets/headshots/bob.jpg';
import david from '../assets/headshots/david.jpg';
import katie from '../assets/headshots/katie.jpg';
import stuart from '../assets/headshots/stuart.jpg';

import '../styles/App.css'
import Footer from './Footer';

import '../styles/Team.css';
import GetStartedForm from './forms/GetStartedForm';
import { useEffect } from 'react';
function MeetTheTeam() {
  useEffect(() => {
    document.title = "NetSpeek - The Team";
  }, []);
  return (
    <>
      <Header />
      <div className="top-card">
        <img className="hero-img" src={AboutUs} />
        <div className="hero-overlay">
          <div className="hero-content-wrapper">
            <div className="hero-content hero-cont-hide"><br /></div>
            <div className="hero-content">
              <h1 className="no-bottom-margin">The Team</h1>
              <p className="white take-left">NetSpeek was founded by Pro AV industry veterans that share a vision of a frictionless workplace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-content">
        <h2 className="secondary-color">Experience & Ambition</h2>
        <p className="visonary-team">
          Our interdisciplinary team’s insight, support and leadership has collectively established a culture of operational excellence within NetSpeek. We believe that together we can fundamentally transform how people work and communicate every day, and are leveraging bleeding-edge technology to make it happen.
        </p>
        <div className="mid-cards-container">
          <div className="team-row">
            <TeamMember name={'Stuart armstrong'} title={' Advisor'} img={stuart} linkedinLink="https://www.linkedin.com/in/armstrongstuart/" />
            <TeamMember name={'Mike Arvelo'} title={'Senior Software Engineer'} img={mike} linkedinLink="https://www.linkedin.com/company/netspeek/mycompany/" />
            <TeamMember name={'Erik DeGiorgi'} title={'CEO'} img={erik} linkedinLink="https://www.linkedin.com/in/erik-degiorgi-35466365/" />
            <TeamMember name={'Brian Kane'} title={'Principle Architect'} img={brian} linkedinLink="https://www.linkedin.com/in/brian-kane-a7a33367/" />
            <TeamMember name={'Jeff Lombardi'} title={'Director'} img={jeff} linkedinLink="https://www.linkedin.com/in/jeffslombardi/" />
            <TeamMember name={'Momin Mokhtar'} title={'Senior Software Engineer'} img={momin} linkedinLink="https://www.linkedin.com/company/netspeek/mycompany/" />
            <TeamMember name={'Preston Naclerio'} title={'Product & Design'} img={preston} linkedinLink="https://www.linkedin.com/in/preston-naclerio/" />
            <TeamMember name={'Katie (smith) valle'} title={'Advisor'} img={katie} linkedinLink="https://www.linkedin.com/in/katie-smith-valle-dsce-1127933/" />
            <TeamMember name={'Bob wilson'} title={'Director'} img={bob} linkedinLink="https://www.linkedin.com/in/bob-wilson/" />
          </div>
        </div>
      </div>
      <div className="user-form-container">
        <div className="user-form-swirl" />
        <div className="user-form-contents">
          <h2 id="get-started" className="secondary-color">Learn More</h2>
          <p className="black">
            Let&apos;s find the perfect solution for your business.
          </p>
          <div className="form-row">
            <GetStartedForm />
          </div>
        </div> 
      </div>
      <Footer />
    </>
  )
}

export default MeetTheTeam
