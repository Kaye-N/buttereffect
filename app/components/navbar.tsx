export default function Navbar() {
    return (
        <nav>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
                <li style={{ marginRight: '10px' }}><a href="#">Home</a></li>
                <li style={{ marginRight: '10px' }}><a href="#">About Me</a></li>
                <li style={{ marginRight: '10px' }}><a href="#">Gallery</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
    )
}