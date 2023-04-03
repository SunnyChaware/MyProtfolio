import React from 'react'
import './aboutme.css'
// import Nav from './Nav's

function AboutMe() {
  return (
    <>
        {/* Nav Bar */}
        {/* <Nav /> */}
        
        {/* Original About Me Section */}
        <div className='container px-20'>
            <div className='flex flex-col justify-around md:flex-row px-10 abtMeContentWrapper'>
                <div className='contentLeft font-poppins'>
                    <text className="">
                        <span style={{color:"rgb(98, 98, 98)", fontSize : "14px"}}>Hello there </span><br/>
                        <strong>My Name is Sunny Chaware,<br/>
                        I design things.
                        I develop things.<br/></strong>
                        <br/>
                        <span style={{color:"rgb(98, 98, 98)"}}>I'am currently a student of <br/></span>
                        <strong>National Institute of Technology Karnataka, Surathkal</strong>.
                        <span style={{color:"rgb(98, 98, 98)"}}><br/>Pursuing my Masters in Computer Application.<br/>
                        <br/>
                        My experience is in Front-End Development and <br/>
                        currently trying to acheive my goal<br/>
                        in Backend-Development.<br/>
                        <br/>
                        As a developer and Designer i believe <br/>in creating something which caters <br/>user's needs is on the top priority.<br/>
                        <br/>
                        You can find me in wild or in beaches<br/> or anywhere capturing some pictures.<br/>
                        <br/>
                        Doing some summer-saults and enjoying<br/> with others as I am a National Player in Gymnastics.</span>
                    </text>
                 </div>
                <div className='contentRight font-poppins'>
                    GET IN TOUCH
                    <br/>
                    <text><a href="mailto:sunnychaware52@gmail.com">sunnychaware52@gmail.com</a></text><br/>
                    <text><a href="tel:+916283814157">(+91) 628-381-4157</a></text><br/>
                    <br/>
                    SOME CODING PLATFORM RATING:
                    <br/>
                    <text><a href='https://www.leetcode.com/__sunny15__/'>Leetcode </a>: Top 23.9% <br/>(Global, Rank - 167,627)</text><br/>
                    <br/>
                    <text><a href='https://www.codechef.com\users/sunny_pa_ch/'>CodeChef </a>: 2⭐️ (Rating- 1431)<br/>(Global Rank - 59084)<br/>(Country Rank - 54364)</text><br/>
                    <br/>
                    <text><a href='https://www.codeforces.com/profile/Sunny__/'>CodeForces </a>: Newbie <br/>(Rating- 885)</text>
                    <br/>
                    <br/>
                    
                    CONNECT HERE<br/>
                    <div className='abtIcons'>
                        <a href='https://www.linkedin.com/in/sunnychaware/'><i className='fab fa-linkedin-in' style={{fontSize:"20px", color:"rgb(197, 197, 197)"}}></i></a>
                        <a href='https://github.com/SunnyChaware'><i className='fab fa-github-alt' style={{fontSize:"20px", color:"rgb(197, 197, 197)"}}></i></a>
                        <a href="mailto:sunnychaware52@gmail.com"><i className='fas fa-envelope' style={{fontSize:"20px", color:"rgb(197, 197, 197)"}}></i></a>
                    </div>

                    
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe