
import globe from '../images/globe.png'
import down from '../images/down.png'
export default function Navbar(){
    return (
        <div className="nav">
            <h3 className="logo">AssetCDE</h3>
            <div class="links-left">
                <a href="#" className="Sol">Solutions
                    <img src={down} alt="solutions" className="down-icon"/>
                </a>
                <a href="#" className="link">Industries
                <img src={down} alt="Industries" className="down-icon"/>
                </a>
            </div>
            <div className="links-right">
                <img src={globe} alt="about us" className="icon"/>
                <a href="#" className="signin">Sign In</a>
                <div className="button"><button className="start-button">Get Started</button></div>

            </div>

        </div>
    );
}