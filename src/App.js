import './App.css';
import Footer from './components/Footer.js';
import MyImage from './assests/MyImage.png';

function App() {
  return (
    <>
        {/* Header Section */}
        <section id="home">
            {/* <div className='container'>
                <div className='flex flex-col md:flex-row justify-center px-2'>
                    <div > a </div>
                    <div > b </div>
                </div>
            </div> */}


            <div class="homeWrapper columns-1 md:columns-2">
                <div className='w-full px-10 bg-green-100'>
                    <text>Hey there! <br/> I'am Sunny Chaware</text>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className='w-full px-10 bg-red-100'>
                    <img className='drop-shadow-2xl homeMyImage' src={MyImage} alt='My Logo' width="65%" height="65%" />
                </div>
            </div>
        </section>

        {/* Footer for every Component */}
        <Footer />
    </>
  );
}

export default App;
