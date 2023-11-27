import styles from '../styles/home.module.css'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.text} data-aos='fade-down'>
                <div className={styles.introContainer}>
                    <h1 className={styles.homeIntroduction}>Hello, my name is <span style={{color: '#2557EF'}}>Izyk</span></h1>
                </div>
                <div className={styles.aboutContainer}>
                    <p>My name is Izyk and I am a Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Home;