import styles from '../styles/home.module.css'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.text} data-aos='fade-down'>
                <div className={styles.introContainer}>
                    <h1 className={styles.homeIntroduction}>Hello, my name is <span style={{color: '#2557EF'}}>Izyk</span>, and welcome to my site!</h1>
                </div>
                <div className={styles.aboutContainer}>
                    <p>My name is Izyk and I am a Web Developer always looking to learn and improve my skills.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;