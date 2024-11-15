import { Heading2, Paragraph } from "../Typography/styles";
import { ButtonWrapper, Centered, Container, Row } from "./styles"; 
 

import Stopwatch from '../../assets/svg/stopwatch.svg';
import PiggyBank from '../../assets/svg/piggy-bank.svg'; 
import HumanProfile from '../../assets/svg/human-profile.svg'; 


import Chart from '../../assets/svg/chart.svg';
import Crowd from '../../assets/svg/crowd.svg'; 
import Plus from '../../assets/svg/plus.svg'; 


import { SwirlCard } from "../SwirlCard";
import { CTAButton } from "../CTAButton";



export const TransformativeSolution = () => {
    return (
        <Container>
            <Row>
                <Centered>
                    <Heading2>NetSpeek's transformative solution</Heading2>
                </Centered>
                <Centered>
                    
                    <p>
                        <Paragraph>
                            NetSpeek is leading the revolution in Pro AV room management and support with our groundbreaking platform, LENA
                        </Paragraph>
                    </p>
                </Centered>

            </Row>
            <Row>
                

                <div className="mid-content">
                    <div className="mid-cards-container">
                    <SwirlCard iconSrc={Stopwatch} 
                        title={"Unlock Unparalleled Efficiency"} 
                        bodyText={"Streamline your Pro AV operations with \"LENA\", eliminating device interoperability, manual intervention and reducing downtime."}/>
                    
                    <SwirlCard iconSrc={PiggyBank} 
                        title={"Drive Significant Cost Savings"} 
                        bodyText={"Achieve substantial cost savings by minimizing support personnel and manual maintenance needs."}/>
                    
                    <SwirlCard iconSrc={HumanProfile} 
                        title={"Elevate the End-User Experience"} 
                        bodyText={"Lena ensures seamless collaboration and productive meetings by proactively resolving issues."}/>
                    
                    </div> 
                    <div className="mid-cards-container">
                    <SwirlCard iconSrc={Chart} 
                        title={"Gain Valuable Insights"} 
                        bodyText={"Make informed decisions with LENA’s comprehensive analytics and reporting features."}/>
                    
                    <SwirlCard iconSrc={Crowd} 
                        title={"Partner with a Visionary"} 
                        bodyText={"Join NetSpeek at the forefront of the Pro AV revolution and experience the game-changing benefits of LENA."}/>
                    
                    <SwirlCard iconSrc={Plus}  
                        title={"Join the Pro AV Revolution"} 
                        bodyText={"80% of organizations grapple with incompatible devices and a patchwork of management tools supporting complex Pro AV ecosystems."}/>
                    
                    </div> 
                    <Centered>
                        
                        <Paragraph>
                            Contact our investment relations team to explore the opportunities that await with NetSpeek.
                        </Paragraph>
                    </Centered>
                    <ButtonWrapper>
                        <CTAButton outline={false} secondaryColor={true} buttonLabel='Learn more'/>
                    </ButtonWrapper>
                </div>

            </Row>
        </Container>
    );
};