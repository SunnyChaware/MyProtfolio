import './App.css';
import Footer from './components/Footer.js';
import MyImage from './assests/MyImage1.png';

function App() {
  return (
    <>
        {/* Header Section */}
        <section id="home">
            <div class="homeWrapper columns-1 md:columns-2">
                <div className=' homeMyText'>
                    <text className='homeMyTextHeading'>👋 <br/>Hello, I'am <span className='HomeNameFont'>Sunny Chaware </span></text>
                    <p className='homeMyTextBody'>
                        I am a Frontend developer, aspiring to be a Softwaare Enginner. 
                        Currently pursuing <strong>Masters of Computer of Applications</strong> 
                        from <strong>National Institute of Technology Karnataka, Surathkal</strong>.
                    </p>
                </div>
                <div className=' px-10'>
                    <img className='drop-shadow-2xl homeMyImage' src={MyImage} 
                    alt='My Logo' width="450px" height="450px" />
                </div>
            </div>
        </section>

        {/* Footer for every Component */}
        <Footer />
    </>
  );
}

export default App;
