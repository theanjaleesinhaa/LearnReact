import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebook, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'; 

export default function LastLine() {
  return (
    <div className="lastline">
      <h2 className="year">&copy; 2024 BuiltAssets. All Rights Reserved.</h2>
      <div className="links-social">
        <h4>Terms</h4>
        <h4>Privacy</h4>
        <a href="https://www.facebook.com/yourwebsite" className="social">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/yourwebsite" className="social">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/yourwebsite" className="social">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
    
      </div>
    </div>
  );
}
