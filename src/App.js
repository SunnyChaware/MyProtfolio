import './App.css';
import Footer from './components/Footer.js';
// import MyImage from './assests/MyImage1.png';
// import Nav from './components/Nav.js'

import AboutMe from './components/AboutMe';
function App() {
  return (
    <>
        <AboutMe />
        {/* Nav Section */}
        {/* <Nav /> */}

        {/*  sticky social media icons */}
        {/* <div className='flex'></div> */}

        {/* Header Section */}
        {/* <section id="home">
            <div class="homeWrapper columns-1 md:columns-2">
                <div className=' homeMyText'>
                    <text className='homeMyTextHeading'>👋 <br/>Hello, I'am <span className='HomeNameFont'>Sunny Chaware </span></text>
                    <p className='homeMyTextBody'>
                        I am a Frontend developer, aspiring to be a Softwaare Enginner. 
                        Currently pursuing <strong>Masters of Computer of Applications </strong>  
                        from <strong>National Institute of Technology Karnataka, Surathkal</strong>.
                    </p>
                    
                    <button className="button-57"><span className="text">About Me</span><span> Here &rArr; </span></button>

                </div>
                <div className='homeImageBox px-10'>
                    <img className='drop-shadow-2xl homeMyImage' src={MyImage} 
                    alt='My Logo' width="450px" height="450px" />
                </div>
            </div>
        </section> */}

        {/* Footer for every Component */}
        <Footer />
    </>
  );
}

export default App;







