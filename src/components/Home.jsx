import Header from './Header'
import AboutUs from '../assets/about-us.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Logo from './Logo';
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg'
import HomeBanner from '../assets/homepage.png';
import '../styles/App.css'
import { BigBanner } from './BigBanner';
import { ButtonWrapper } from './TransformativeSolution/styles';
import CTAButton from './CTAButton';
import { SvgMediaRowContainer } from "./SVGs/SvgMediaRowContainer";
import Piggybank from '../assets/svg/piggy-bank.svg';
import CoinChart from '../assets/svg/coinchart.svg';
import GetStartedForm from './forms/GetStartedForm';
import Footer from './Footer';
import { useEffect } from 'react';
function Home() {
  useEffect(() => {
    document.title = "NetSpeek - Home";
  }, []);
  return (
    <>
      <Header />
      <div className="top-card">
        <BigBanner src={HomeBanner} />
        <div className="hero-overlay">
          <div className="hero-content-wrapper">
            <div className="hero-content hero-cont-hide"><br /></div>
            <div className="hero-content">
              <h1 className="no-bottom-margin">Revolutionizing<br /> Workspaces</h1>
              <p className="white">A single solution to the most common<br /> problems in Pro AV.</p>
              <ButtonWrapper>
                <CTAButton outline={true} buttonLabel="Meet Lena" />
              </ButtonWrapper>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-content">
        <h2 className="primary-color">Our Solution</h2>
        <div className="mid-cards-container">
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={Piggybank} />
                <h3 className="primary-color left-8px text-cap">Decrease operating costs</h3>
                <p className="black body3">
                  Our platform reduces the operational overhead required to deploy, use and manage Pro AV infrastructure.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={CoinChart} />
                <h3 className="primary-color left-8px text-cap">Increase workplace efficiency</h3>
                <p className="black body3">
                  Our technology enables frictionless movement around the workplace, greatly reducing time lost when technology fails.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
        <CTAButton outline={false} secondaryColor={true} buttonLabel="Learn more" />
      </div>
      <div className="user-form-container">
        <div className="user-form-swirl" />
        <div className="user-form-contents">
          <h2 id="get-started" className="secondary-color">Learn More</h2>
          <p className="black">
            Learn more about how NetSpeek is revolutionizing the workplace.
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

export default Home
