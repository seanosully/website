import './About.css'
import portraitImage from './images/dsc_8239-63.jpeg';
function About() {

  return (
    <>
    <div id="home" className='about-section'>
            <img className='image' src={portraitImage} />
            <div>
                <h1 className='about-header'>
                About Me
                </h1>
            <p className='about-text'>
            I am a recent graduate from the College of the Holy Cross where I studied computer science and economics. During my time at Holy Cross I also worked as a teaching assistant for various computer sciences courses. As a teaching assistant I held office hours where students could come in for extra help. I also assisted in labs and graded assignments for the professors.

Outside of the classroom I enjoyed playing on the club rugby team and was a member of the Cures for Kids club where we raised money to combat childhood cancer.
<br></br><br></br>
I am an aspiring software developer and am currently furthering my knowledge as a programmer by working on various presonal projects and learning new technologies. 
            </p>
            <p className='language-header'>
                Languages
            </p>
            <p className='languages'>
            Python &#160;&#160;·&#160;&#160; Java&#160;&#160; ·&#160;&#160; C++&#160;&#160; · &#160;&#160;Javascript &#160;&#160;· &#160;&#160;Lua&#160;&#160; ·&#160;&#160; HTML &#160;&#160;·&#160;&#160; CSS &#160;&#160;· &#160;&#160;SQL &#160;&#160;· &#160;&#160;Bash
            </p>
            </div>
            
      </div>
    </>
      

  )
}

export default About
