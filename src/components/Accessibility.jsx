import Header from './Header';
import Footer from './Footer';
import '../styles/footerLinks.css';
import { Link } from 'react-router-dom';
const Accessibility = () => {
    return (
        <div>
            <Header />
            <div className='accessability'>
                <div className='access-head-text'>
                    <h1>Accessibility at NetSpeek</h1>
                    <p>If you need assistance:</p>
                    <p>If you have a hearing or speech disability, please call 7-1-1 to utilize Telecommunications Relay Services (TRS).</p>
                </div>
                <div className='access-bottom-text'>
                    <h2>We believe your path to our services should be barrier-free.</h2>
                    <p>Accessibility is a goal of ours that benefits not only our customers/members, but our own families, friends, colleagues and communities. NetSpeek offers a number of accommodations to customers, clients, and colleagues in order to make our services accessible to everyone, including individuals with disabilities. We've built strong partnerships with community organizations to ensure we're a proper reflection of the customers/members we serve.</p>
                    <p>The same goes for our digital experiences. We've taken a different approach to digital accessibility. We utilize inclusive practices, usability studies conducted with individuals with disabilities and leverage expertise from our team members with disabilities to design, build and QA our applications. We believe this approach embeds empathy into our product development and allows us to strive to deliver inclusive and robust digital experiences for everyone.</p>
                    <p>At NetSpeek, we recruit and grow diverse teams of experts including native assistive technology users and non-visual designers to guide our innovations.</p>
                    <p>At NetSpeek, our digital products are built with every user in mind.</p>
                    <p>We strive to meet and exceed best practices and standards in:</p>
                    <ul>
                        <li><Link to="https://www.w3.org/TR/WCAG21/">Latest Web Content Accessibility Guidelines (WCAG) A and AA</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Accessibility;