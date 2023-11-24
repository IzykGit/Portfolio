import '../styles/home.css'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className="text" data-aos='fade-down'>
                <div className="introContainer">
                    <h1 className='homeIntroduction'>Hello, my name is <span style={{color: '#2557EF'}}>Lance</span>, and welcome to my site!</h1>
                </div>
                <div className="aboutContainer">
                    <p>My name is Lance and I am a Web Developer always looking to learn</p>
                </div>
            </div>
        </div>
    )
}

export default Home;