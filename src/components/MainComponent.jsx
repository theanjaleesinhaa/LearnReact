
import up from '../images/up.png'
import clip from '../images/clip.png'
import mic from '../images/mic.png'
export default function MainComponent() {
    return (
      <div className="container-heading">
        <h4 className="title">Redefine EAM in the age of AI
            <div className="para">
                <p className="para-1">
                Enterprise asset management (EAM) and common data environment
                </p>
                <p className="para-2">to plan - build - operate critical assets.</p>
            </div>
            <input type="text" className="search"/>
        <img src={mic} alt="Microphone icon" className="icon in-right" />
        <img src={clip} alt="Clip icon" className="icon in-left" />
        <img src={up} alt="Up arrow icon" className="icon up" />
        </h4>
      </div>
    );
  }