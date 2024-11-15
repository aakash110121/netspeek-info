/* eslint-disable react/prop-types */
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg';
import teamcicle from '../assets/teamcircle.png';
import '../styles/App.css';
import { Link } from 'react-router-dom';

function TeamMember({ name, title, img, linkedinLink }) {
    return (
        <div className="team-avatar-container" >
            <div className="team-avatar-circle">
                <img src={img} className="team-avatar-inner-circle" />
            </div>
            <h4 className="black text-center text-cap">{name}</h4>
            <p className="body4 text-center">{title}</p>
            <Link className="team-member-linkedin" to={linkedinLink} target="_blank">
                <img src={LinkedIn} /> 
            </Link>
        </div>
    )
}

export default TeamMember;