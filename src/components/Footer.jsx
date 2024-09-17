
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Footer(){
return(
    <div className="footer-container">
    <div className="footer-list">
    <h3 className="footer-header">SOLUTIONS</h3>
    <div className="footer-tiles">
        <ul>
            <li>Asset Register</li>
            <li>Asset Lifecycle</li>
            <li>Asset Handover</li>
            <li>Asset Maintenance</li>
            <li>Asset Dashboard</li>
            <li>Asset Copilot</li>
            <li>Industry Integrations</li>
        </ul>
    </div>
    </div>

    <div className="footer-list">
    <h3 className="footer-header">{'Industries'.toUpperCase()}</h3>
    <div className="footer-tiles">
        <ul>
        <li>Commercial Buildings</li>
        <li>Data Centers</li>
        <li>Healthcare & Life Science</li>
        <li>Energy & Utilities</li>
        <li>Civil Infrastructure</li>
        <li>Roads & Bridges</li>
        <li>Airports</li>
        <li>Oil & Gas</li>
        </ul>
    </div>
    </div>
    <div className="footer-list">
    <h3 className="footer-header">{'Company'.toUpperCase()}</h3>
    <div className="footer-tiles">
        <ul>
        <li>About us</li>
        <li>Careers</li>
        <li>Insights</li>
        <li>Contact us</li>
        </ul>
    </div>
    </div>
    <div className="footer-list">
    <h3 className="footer-header">{'Get in Touch'.toUpperCase()}</h3>
    <div className="footer-tiles">
        <ul>
        <li>
              <a href="mailto:support@assetade.com">
                <FontAwesomeIcon icon={faEnvelope} /> support@assetcde.com
              </a>
            </li>
            <li>
              <a href="tel:+914155550132">
                <FontAwesomeIcon icon={faPhone} /> +91 (415) 555-0132
              </a>
            </li>

        </ul>
    </div>
    </div>
</div>
);
}
