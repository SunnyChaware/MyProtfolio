import React from 'react'
import "./footer.css"
import logo from '../assests/logo.png'

function Footer() {
  return (
    <>
        <div className='footerWrapper px-10 font-medium'>
           <div className='container'>
                {/* logo on the top of the footer section */}
                <div class="flex flex-col md:flex-row justify-center py-3 footerImageSection">
                    <img src={logo} alt='My Logo' width={75} height={75} />
                </div>
               

                {/* list items for links */}
                <div className='flex flex-col justify-center md:flex-row px-2 footerLinkSection'>
                    <div className='btn footerLinkItem px-6 py-1'><a href='aboutSection'>  ABOUT ME </a></div>
                    <div className='btn footerLinkItem px-6 py-1'><a href="workSection">WORK </a></div>
                    <div className='btn footerLinkItem px-6 py-1'><a href="resume">RESUME</a></div>
                    <div className='btn footerLinkItem px-6 py-1'><a href="contactSection">CONTACT</a></div>
                </div>


                {/* <div id="wcb" class="carbonbadge"></div> */}
                {/* <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script> */}


                {/* copyright section */}
                <div className='flex justify-center footerCopyrightSection text-sm'>
                    &copy; Sunny Chaware | 2023
                </div>
           </div>
        </div>
    </>
  )
}

export default Footer