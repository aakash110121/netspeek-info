import netspeekLogo from '../assets/netspeek-logo.png';
import netspeekLOgo from '../assets/NetSpeekLogo.png';
import '../styles/Logo.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="netspeek-logo-el">
      <Link to="/">
        <img src={netspeekLOgo} className="logo" alt="NetSpeek logo" />
      </Link>
    </div>
  )
}

export default Logo
