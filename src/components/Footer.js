import React, { useRef, useState} from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import ReactJsAlert from "reactjs-alert";
import { BorderColor } from '@material-ui/icons';


function Footer() {
    
  const form = useRef();
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uzpwszc', 'ssa_template' , form.current, 'n8o_5KUUNA5PYKjQW')
        .then((result) => {
            console.log(result.text);
            console.log("Message sent!");
            setStatus(true);
            setType("success");
            setTitle("Message sent!");
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='footer-container2' id="footer">
        <div className='left-contact2'>
          <div className='whole-left'>
          <h1 className='left-h1'>UBC SSA</h1>
          <h2 className='left-h2'>singapore.ubc@gmail.com</h2>
          <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                target='_blank'
                aria-label='Facebook'
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.facebook.com/theubcssa');
                  }}
              >
                <i className='fab fa-facebook-square' />
              </Link>
              <Link
                className='social-icon-link instagram'
                target='_blank'
                aria-label='Instagram'
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.instagram.com/theubcssa/');
                  }}
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link linkedin'
                target='_blank'
                aria-label='LinkedIn'
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.linkedin.com/company/theubcssa/');
                  }}
              >
                <i className='fab fa-linkedin' />
              </Link>
              <Link
                className='social-icon-link discord'
                target='_blank'
                aria-label='Discord'
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://discord.com/invite/dyPydJK');
                  }}
              >
                <i className='fab fa-discord' />
              </Link>
            </div>
          </div>
        </section>
          </div>
        </div>
        <div className='footer-subscription2'>
          <p className='footer-subscription-heading'>
          Have a question? Send us a message!  <br/>
          or send us an email at 
          <br/> singapore.ubc@gmail.com</p>
          <div className='input-areas'>
            <form ref={form} >
            <input
                className='footer-input'
                name="name"
                type='text'
                placeholder='Your Name'
                required
              />
              <input
                className='footer-input'
                name="email"
                type='email'
                placeholder='Your Email'
                required
              />
              <input
                className='footer-input'
                name="subject"
                type='text'
                placeholder='Your Subject'
              />
              <textarea className='footer-input' name="message" rows="7" placeholder='Your Message' required/>
              <Button buttonStyle='btn--outline' type="submit" value="Send" textColor={'#000000'} borderColor={'#000000'}
              onClick={sendEmail}>Send Message &nbsp;<i className="fa fa-arrow-right"></i></Button>
              <ReactJsAlert
                  status={status} // true or false
                  type={type} // success, warning, error, info
                  title={title}
                  quotes={true}
                  quote=" Your message has been sent! Please allow 3 business days for our response."
                  Close={() => setStatus(false)}
        />
            </form>
          </div>
        </div>
    </div>
  );
}

export default Footer;