import homebutton from 'public/homebutton.svg'
import aboutbutton from 'public/aboutbutton.svg'
import gallerybutton from 'public/gallerybutton.svg'
import profilebutton from 'public/profilebutton.svg'
import { Link } from '@remix-run/react';

export default function Navbar() {
    return (
        <footer style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <nav style={{ width: '70%', height: '100%' }}>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
                    <li style={{ marginRight: '20px' }}>
                        <a href="">
                            <img
                                src={homebutton}
                                alt='Home button'>
                            </img>
                        </a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="">
                            <img
                                src={aboutbutton}
                                alt='About button'>
                            </img>
                        </a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="">
                            <img
                                src={gallerybutton}
                                alt='Gallery button'>
                            </img>
                        </a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
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