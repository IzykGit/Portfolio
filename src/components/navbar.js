import styles from '../styles/navbar.module.css'

const Navbar = () => {


    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navbar}>
                <li data-aos="fade-down" data-aos-delay={200}><a href='#'>About Me</a></li>
                <li data-aos="fade-down" data-aos-delay={200}><a href='#'>Projects</a></li>
                <li data-aos="fade-down" data-aos-delay={300}><a href='#'>Contact</a></li>
                <li data-aos="fade-down" data-aos-delay={400}><a href="https://github.com/IzykGit" target="_blank">Github</a></li>
                <li data-aos="fade-down" data-aos-delay={500}><a href='#'>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;