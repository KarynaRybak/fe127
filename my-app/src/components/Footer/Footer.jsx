import { Link } from 'react-router-dom';
import logo from "./img/footer_logo.png";
import app1 from "./img/app-1.png";
import app2 from "./img/app-2.png";
import './_footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content-container">
          <div className="block">
            <Link className="logo" to="/">
              <img src={logo} alt="logo"/>
            </Link>
            <div className="address">
            <p>5th Avenue st, manhattan</p>
            <p>New York, NY 10001</p>
            </div>
            <div className="footer-contact">
              <p>mail us: <a href="#">support@flixgo.com</a></p>
                <p>call us: <a href="#">+1 (800) 234-5678</a></p>
                  <nav>
                    <ul>
                      <li className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></li>
                      <li className="social-icon"><FontAwesomeIcon icon={faTwitter} /></li>
                      <li className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></li>
                      <li className="social-icon"><FontAwesomeIcon icon={faInstagram} /></li>
                      <li className="social-icon"><FontAwesomeIcon icon={faViber} /></li>
                   </ul>
                 </nav>
             </div>
          </div>
          <div className="quick-links">
            <h4>QUICK LINKS</h4>
              <nav>
                <ul>
                  <li><Link to="/">About Filmoja</Link></li>
                  <li><Link to="/">Get A Ticket</Link></li>
                  <li><Link to="/">Movie Schedule</Link></li>
                  <li><Link to="/">Pricing Plan</Link></li>
                  <li><Link to="/">Terms & Conditions</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                </ul>
             </nav>
          </div>
          <div className="app-block">
            <h3>GET YOUR APP NOW</h3>
            <p>Download App And Get Free Movie Ticket !</p>
              <img className="app-image" src={app1} alt="" />
              <img className="app-image" src={app2} alt="" />
            <p>
              <span className="payback-number">30%</span> Payback On App Download
            </p>
         </div>
       </div>
      </div>
    </footer>
  )
}
export default Footer;
