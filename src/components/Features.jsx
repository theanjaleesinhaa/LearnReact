
import dash1 from '../images/dash1.png'
import dash2 from '../images/dash2.jpg'
import dash3 from '../images/dash3.png'
export default function Features(){
    return(
        <div className="features-container">
            <h2 className="features-header">Explore more features in AssetCDE</h2>
            <div className="feature-list">
                <div className="feature-1">Asset Register</div>
                <div className="feature-1">Asset Lifecycle</div>
                <div className="feature-1">Asset Handover</div>
                <div className="feature-1">Asset Maintenance</div>
                <div className="feature-1">Asset Dashboard</div>
                <div className="feature-1">Asset Copilot</div>
                <div className="feature-1">Industry Integrations</div>
            </div>
            <h3 className="insight-heading">Actionable asset insights</h3>
            <div className="insight-para">Harnessing the power of asset lifecycle data insights and machine learning to enable organizations to make informed decisions. These insights empower them to avoid process delays, enhance operational efficiency, real-time visibility into asset health, maintenance history and achieve long-term sustainability.</div>
            <div className="insight-img">
                <img src= {dash1} alt="" className="tilt-1"/>
                <img src= {dash2} alt="" className="straight"/>
                <img src= {dash3} alt="" className="tilt-2 "/>
            </div>
        </div>
    );
}