import React from 'react';
import { Container, List, ListItem, Row, TextImageExhibitWrapper, ExhibitImage, ImageContainer, TextContainer } from './styles';

import DeviceFlatLay from '../../assets/device-flat-lay.png';
import { Heading2, Paragraph } from '../Typography/styles';

const NetSpeeksProposition = () => {
  return (
    <Container>
        <Row>
            <Heading2>NetSpeeks Value Proposition</Heading2>
            
            

            <TextImageExhibitWrapper>
                <TextContainer >
                    <Paragraph>
                        NetSpeeks’ value proposition lies in its unique ability to transform ProAV room management and support through its cutting-edge solution, Lena. By offering a centralized, efficient, and proactive approach to managing and monitoring ProAV conference rooms, NetSpeeks empowers organizations to:
                    </Paragraph>
                </TextContainer>
                <ImageContainer>
                    <ExhibitImage src={DeviceFlatLay} />
                </ImageContainer>
            </TextImageExhibitWrapper>


            <List>
                
                <ListItem>
                    <Paragraph>Significantly reduce costs associated with device interoperability,  manual intervention, room downtime, and support personnel.</Paragraph>
                </ListItem>
                
                <ListItem>
                    <Paragraph>Streamline operations by automating processes and minimizing the need for constant manual checks and maintenance.</Paragraph>
                </ListItem>
                
                <ListItem>
                    <Paragraph>Enhance end-user experiences by proactively identifying and resolving issues before they impact meetings and collaboration.</Paragraph>
                </ListItem>
                
                <ListItem>
                    <Paragraph>Reallocate resources to strategic initiatives by optimizing support models and reducing the burden on IT, security, and real estate teams.</Paragraph>
                </ListItem>
                
                <ListItem>
                    <Paragraph>Gain valuable insights into room usage, system performance, and trends through comprehensive analytics and reporting.</Paragraph>
                </ListItem>
            </List> 
            <Paragraph>
            NetSpeek's "LENA" delivers measurable results, enabling clients to unlock the true potential of their Pro AV investments while fostering a more productive, efficient, and collaborative work environment. By partnering with NetSpeek, organizations can transform their Pro AV management approach, setting a new standard for efficiency, cost savings, and user satisfaction in the modern workplace.
            </Paragraph>
        </Row>
    </Container>
  );
};

export default NetSpeeksProposition;
