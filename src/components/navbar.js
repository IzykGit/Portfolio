import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navContainer'>
            <ul className='navbar'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li><a href="https://github.com/IzykGit" target="_blank">Github</a></li>
                <li>Resume</li>
            </ul>
        </div>
    )
}

export default Navbar;