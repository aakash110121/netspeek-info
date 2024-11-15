import Header from './Header';
import Footer from './Footer';
import '../styles/footerLinks.css';
import { Link } from 'react-router-dom';
const TermsConditons = () => {
    return (
        <div>
            <Header />
            <div className='accessability'>
                <div className='access-head-text'>
                    <h1>Terms and Conditions</h1>
                    <p>Welcome to NetSpeek Inc.!</p>
                    <p>These terms and conditions outline the rules and regulations for the use of NetSpeek Inc.'s Website and Services, including any associated applications, software, and content (collectively referred to as the "Service").</p>
                    <p>By accessing this website and using our Service, we assume you accept these terms and conditions. Do not continue to use NetSpeek.com if you do not agree to take all of the terms and conditions stated on this page.</p>
                    <h3>1. License to Use</h3>
                    <p>1.1. NetSpeek Inc. grants you a non-exclusive, non-transferable license to use the Service solely for your internal business purposes, subject to these Terms and Conditions.</p>
                    <p>1.2. You agree not to access (or attempt to access) the Service by any means other than through the interfaces provided by NetSpeek Inc.</p>
                    <h3>2. User Accounts</h3>
                    <p>2.1. To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password.</p>
                    <p>2.2. You agree to provide accurate and complete information when creating an account and to update your information promptly if there are any changes.</p>
                    <p>2.3. NetSpeek Inc. reserves the right to suspend or terminate your account at any time if we believe that you have violated these Terms and Conditions.</p>
                    <h3>3. Privacy</h3>
                    <p>3.1. Your use of the Service is subject to NetSpeek Inc.'s Privacy Policy, which can be found <Link to="/privacy-policy">Here</Link>. By using the Service, you consent to the collection and use of your information as outlined in the Privacy Policy.</p>
                    <h3>4. Intellectual Property</h3>
                    <p>4.1. All content included in the Service, such as text, graphics, logos, images, audio clips, and software, is the property of NetSpeek Inc. or its licensors and is protected by copyright laws.</p>
                    <p>4.2. You may not reproduce, modify, distribute, display, or create derivative works of any content from the Service without the express written consent of NetSpeek Inc.</p>
                    <h3>5. Limitation of Liability</h3>
                    <p>5.1. To the fullest extent permitted by law, NetSpeek Inc. shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in any way connected with your use of the Service.</p>
                    <h3>6. Governing Law</h3>
                    <p>6.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts and the United States of America, without regard to its conflict of law principles.</p>
                    <h3>7. Changes to Terms and Conditions</h3>
                    <p>7.1. NetSpeek Inc. reserves the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms and Conditions.</p>
                    <h3>8. Contact Us</h3>
                    <p>8.1. If you have any questions about these Terms and Conditions, please contact us atplease contact our 
                        <a href="mailto:erik@netspeek.com"> customer service team</a>.</p>
                    <p>By using Netspeek.com, you signify your acceptance of these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our Service.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsConditons;