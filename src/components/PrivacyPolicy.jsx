import Header from './Header';
import Footer from './Footer';
import '../styles/footerLinks.css';
import { Link } from 'react-router-dom';
const PrivacyPolicy = () => {
    return (
        <div>
            <Header />
            <div className='accessability'>
                <div className='access-head-text'>
                    <h1>Privacy Policy</h1>
                    <p>This Privacy Policy describes how NetSpeek Inc. collects, uses, and discloses your information when you use our website and services (collectively, the "Service").</p>
                    <p>By accessing or using the Service, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Service.</p>
                    <h3>1. Information We Collect</h3>
                    <p>1.1. Personal Information: When you use our Service, we may collect personal information that can be used to identify you, such as your name, email address, phone number, and payment information.</p>
                    <p>1.2. Usage Data: We may also collect information about how you access and use the Service, including your IP address, browser type, device type, operating system, and pages visited.</p>
                    <p>1.3. Cookies: We use cookies and similar tracking technologies to collect information and improve the Service. Cookies are small files stored on your device that enable us to recognize your browser and remember certain information.</p>
                    <h3>2. How We Use Your Information</h3>
                    <p>2.1. We use the information we collect to provide, maintain, and improve the Service, as well as to communicate with you, process payments, and personalize your experience.</p>
                    <p>2.2. We may also use your information to send you promotional communications, updates, and other information about our products and services. You may opt-out of receiving these communications at any time.</p>
                    <h3>3. How We Share Your Information</h3>
                    <p>3.1. We may share your information with third-party service providers who assist us in operating the Service, such as payment processors, hosting providers, and analytics services.</p>
                    <p>3.2. We may also disclose your information if required by law or in response to a valid legal request, such as a subpoena or court order.</p>
                    <h3>4. Data Security</h3>
                    <p>4.1. We take reasonable measures to protect the security of your information and prevent unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
                    <h3>5. Your Rights</h3>
                    <p>5.1. You have the right to access, update, or delete your personal information at any time. You may also object to the processing of your information or request that we restrict certain processing activities.</p>
                    <p>5.2. If you would like to exercise any of these rights, please contact us using the contact information provided below.</p>
                    <h3>6. Children's Privacy</h3>
                    <p>6.1. Our Service is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete it.</p>
                    <h3>7. Changes to this Privacy Policy</h3>
                    <p>7.1. We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page.</p>
                    <h3>8. Contact Us</h3>
                    <p>8.1. If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact our     <a href="mailto:erik@netspeek.com">customer service team</a>.</p>
                    <p>By using our Service, you consent to the collection and use of your information as described in this Privacy Policy.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy;