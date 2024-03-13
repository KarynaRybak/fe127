import { useForm } from "react-hook-form";
import "./contact.scss";
import AboutSection from "../AboutUs/AboutSection";
import "..//AboutUs/about.section.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';

function Contact () {
  const { handleSubmit, register, formState: { errors } } = useForm();
    
  function onSubmit(values) {
    console.log(values);
  }
    return (
      <div>
        <AboutSection activeLink="Contact" />
        <div className="contact-container">
          <div className="contact-info">
            <div className="support-box">
              <FontAwesomeIcon icon={faUsers} className="icon_support" />
              <div className="support-text">
                <h3>need 24/7 support</h3>
                <a href="#" onClick={() => window.location.href = '/contact'}>Contact support</a>
              </div>
            </div>
            <p>Head Office Address</p>
            <h4>504, Lavaca Street, 2900, USA</h4>
            <p>Get Connected With</p>
            <nav>
              <ul>
                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faViber} /></li>
              </ul>
            </nav>
            <p>Feel Like Talking</p>
            <h4>+88-123-4567-90</h4>
            <p>Contact Via Email</p>
            <h4>Info@Example.Com</h4>
          </div>
  
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h2>Don't Be A Stranger!</h2>
            <div className="form-item">
              <input
                className={errors.name ? 'error' : ''}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Required",
                  pattern: {
                    value: /(\w|\s|[.'-])+/,
                    message:"Incorrected name"
                  }
                })}
              />
              <p className={'error-message'}>{errors.name && errors.name.message}</p>
            </div>
            <div className="form-item">
              <input
                className={errors.email ? 'error' : ''}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"Invalid email address"
                  }
                })}
              />
              <p className={'error-message'}>{errors.email && errors.email.message}</p>
            </div>
            <div className="form-item">
              <input
                className={errors.subject ? 'error' : ''}
                type="text"
                placeholder="Subject"
                {...register("subject", {
                  required: "Required",
                  pattern: {
                    value:  /(\w|\s|[.'-])+/,
                    message:"Incorrect subject"
                  }
                })}
              />
              <p className={'error-message'}>{errors.subject && errors.subject.message}</p>
            </div>
            <div className="form-item">
              <textarea
                className={errors.message ? 'error' : ''}
                placeholder="Write your message here..."
                rows="5"
                {...register("message", {
                  required: "Required",
                  pattern: {
                    value:  /(\w|\s|[.'-])+/,
                    message:"Incorrect message"
                  }
                })}
              />
              <p className={'error-message'}>{errors.message && errors.message.message}</p>
            </div>
            <button type="submit" className="button">Send message</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
  