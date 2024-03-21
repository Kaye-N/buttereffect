import homebutton from 'public/homebutton.svg';
import aboutbutton from 'public/aboutbutton.svg';
import gallerybutton from 'public/gallerybutton.svg';
import profilebutton from 'public/profilebutton.svg';
import { Link } from '@remix-run/react';

export default function Navbar() {
    return (
        <footer style={{backgroundColor: '#edebe1', display: 'flex', justifyContent: 'center'}}>
            <nav>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
                <li>
                        <Link to='/homepage'>
                            <img
                                src={homebutton}
                                alt='Home button'
                            />
                        </Link>
                    </li>
                    <li>
                        <a href="_blank">
                            <img
                                src={aboutbutton}
                                alt='About button'>
                            </img>
                        </a>
                    </li>
                    <li>
                        <a href="_blank">
                            <img
                                src={gallerybutton}
                                alt='Gallery button'>
                            </img>
                        </a>
                    </li>
                    <li>
                        <Link to='/profile'>
                            <img
                                src={profilebutton}
                                alt='Profile button'
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}