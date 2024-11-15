import Header from './Header'
import AboutUs from '../assets/about-us.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Logo from './Logo';
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg';

import '../styles/App.css';
import Footer from './Footer';
import { BigBanner } from './BigBanner';
import { ButtonWrapper } from './TransformativeSolution/styles';
import CTAButton from './CTAButton';
import { SvgMediaRowContainer } from "./SVGs/SvgMediaRowContainer";
import GetStartedForm from './forms/GetStartedForm';
import ConnectSvg from "../assets/svg/connect-icon-large-primary.svg";
import WorkerSvg from "../assets/svg/worker-icon-large-primary.svg";
import ToolsSvg from "../assets/svg/tools-icon-large-primary.svg";
import investSvg from '../assets/svg/Invest.svg';
import joinSvg from '../assets/svg/Join.svg';
import partnerSvg from '../assets/svg/Partner.svg';
import { useEffect } from 'react';
import getInvolved from '../assets/getinvolved.jpg';
function GetStarted() {
  useEffect(() => {
    document.title = "NetSpeek - Get Started";
  }, []);
  return (
    <>
      <Header />
      <div className="top-card">
        <BigBanner src={getInvolved} />
        <div className="hero-overlay">
          <div className="hero-content-wrapper">
            <div className="hero-content hero-cont-hide"><br /></div>
            <div className="hero-content">
              <h1 className="no-bottom-margin">Get Involved</h1>
              <p className="white">Ready to be part of the revolution?</p>

              <ButtonWrapper>

                <CTAButton outline />
              </ButtonWrapper>

            </div>
          </div>
        </div>
      </div>
      <div className="mid-content">
        <h2 className="primary-color">Ways To Get Involved</h2>
        <div className="mid-cards-container">
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={joinSvg} />
                <h3 className="secondary-color left-8px text-cap">Join the Team</h3>
                <p className="black body3">
                  If you are interested in working with cutting edge technologies and reshaping how people work, let us know! We are a software company that is always looking for passionate team players in all areas of work.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={investSvg} />
                <h3 className="secondary-color left-8px text-cap">Become an Investor</h3>
                <p className="black body3">
                  There are several stages of investment opportunity for accredited individuals looking to help support a fast paced company poised to disrupt a near half-trillion dollar industry.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={partnerSvg} />
                <h3 className="secondary-color left-8px text-cap">Become a Partner</h3>
                <p className="black body3">
                  As a Pro AV technology vendor and early adopter of NetSpeek’s platform, you will solidify your competitive advantage in a fragmented industry. The best part is, we do all the work for you!
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
      <div className="user-form-container">
        <div className="user-form-swirl" />
        <div className="user-form-contents">
          <h2 id="get-started" className="secondary-color">Learn More</h2>
          <p className="black">
            Let&apos;s find the perfect solution for your business.
          </p>

          <div className='form-row'>
            <GetStartedForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GetStarted 
