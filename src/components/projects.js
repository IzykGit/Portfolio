import styles from '../styles/projects.module.css'


const Projects = () => {
    return (
        <div>
            <div className={styles.title}>
                <h1>My <span style={{color: '#2557EF'}}>Projects</span> and Tools</h1>
                <div className={styles.toolsContainer}>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
            <div >
                <h1></h1>
            </div>
            <div>
                <h1></h1>
            </div>
        </div>
    )
}

export default Projects;