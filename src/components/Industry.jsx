import Header from './Header'
import IndustryHeroImg from '../assets/industry.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Footer from './Footer';
import '../styles/App.css';
import { BigBanner } from './BigBanner';
import { ButtonWrapper } from './TransformativeSolution/styles';
import CTAButton from './CTAButton';
import GetStartedForm from './forms/GetStartedForm';
import { useEffect } from 'react';
import { SvgMediaRowContainer } from "./SVGs/SvgMediaRowContainer";
import ConnectSvg from "../assets/svg/connect-icon-large-primary.svg";
import WorkerSvg from "../assets/svg/worker-icon-large-primary.svg";
import ToolsSvg from "../assets/svg/tools-icon-large-primary.svg";
function Industry() {
  useEffect(() => {
    document.title = "NetSpeek - Industry";
  }, []);
  return (
    <>
      <Header />
      <div className="top-card">
        <BigBanner src={IndustryHeroImg} />
        <div className="hero-overlay">
          <div className="hero-content-wrapper">
            <div className="hero-content hero-cont-hide"><br /></div>
            <div className="hero-content">
              <h1 className="no-bottom-margin">Solving <br /> Universal Problems</h1>
              <p className="white">A centralized approach to managing<br /> Pro AV technologies.</p>
              <ButtonWrapper>

                <CTAButton buttonLabel='Learn more' outline />
              </ButtonWrapper>

            </div>


          </div>
        </div>
      </div>
      <div className="mid-content">
        <h2 className="secondary-color">Industry Problems</h2> 
        <div className="mid-cards-container">
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={ConnectSvg} />
                <h3 className="secondary-color left-8px">Lack of Interoperability</h3>
                <p className="black body3">
                  More than 50% of organizations
                  report difficulties in managing and
                  monitoring their Pro AV devices
                  due to the lack of interoperability
                  and standardization. <br /> <br /> <i>-Commercial Integrator</i>
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={WorkerSvg} />
                <h3 className="secondary-color left-8px">Lack of Skilled Labor</h3>
                <p className="black body3">
                  More than 72% of Pro AV System Integrators say talent issues are among their top concerns this year. <br /><br /><i> -Commercial Integrator</i>
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={ToolsSvg} />
                <h3 className="secondary-color left-8px">Lack of Proper Tools</h3>
                <p className="black body3">
                  Over 80% of organizations grapple with incompatible devices and a patchwork of management tools supporting complex Pro AV ecosystems. <br /> <br /> <i>-Pro AV Business Trends</i>
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

export default Industry
