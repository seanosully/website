import './Contact.css'
import icon1 from './images/linked-in-logo (1) (1) (1).png';
import icon2 from './images/document-round-icon (1).png';
import icon3 from './images/github-logo.png';
import icon4 from './images/leetcode_logo (1) (1).png';

function Contact() {

    return (
      <>
        <div id='contact' className="contact-section">
            <div className='header-container'>
                <h1 className='header'>
                Contact
                </h1>
            </div>
          <div className='contact-content'>
          <div className='email-container'>
            <a className='email-button' href='mailto:sean13.osullivan@gmail.com'>
                Email Me
            </a>
          </div>
          <div className='social-links'>
            <div className='social-container'>
                <a href='https://www.linkedin.com/in/seanosullivan13/' target='_blank'>
                    <img className='social-image' src={icon1} />
                </a>
                <p className='social-link'>
                    LinkedIn
                </p>
            </div>
            
            <div className='social-container'>
                <a href="https://github.com/seanosully/Resume/blob/main/Sean%20O'Sullivan%20Resume.pdf" target='_blank'>
                    <img className='social-image' src={icon2} />
                </a>
                <p className='social-link'>
                    Resume
                </p>
            </div>
            <div className='social-container'>
                <a href='https://github.com/seanosully/' target='_blank'>
                    <img className='social-image' src={icon3} />
                </a>
                <p className='social-link'>
                    Github
                </p>
            </div>
            <div className='social-container'>
                <a href='https://leetcode.com/seanosully/' target='_blank'>
                    <img id='leetcode-icon'className='social-image' src={icon4} />
                </a>
                <p className='social-link'>
                    LeetCode
                </p>
            </div>
          </div>
          </div>
          
        </div>
      </>
    )
  }
  
  export default Contact
  