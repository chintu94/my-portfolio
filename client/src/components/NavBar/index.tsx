import './style.scss';
import pic from '../../assets/pic.jpg';

function NavBar(){
    return (
        <nav>
            <div className='home-key'>
                <img src={pic} alt="profile pic" className='pro-pic' />
                <span>Chintu Sahu</span>
            </div>
            <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;