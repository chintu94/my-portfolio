import './style.scss';
import pic from '../../assets/pic.jpg';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav>
            <div className='home-key'>
                <img src={pic} alt="profile pic" className='pro-pic' />
                <span>Chintu Sahu</span>
            </div>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;