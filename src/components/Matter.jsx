import building from '../images/bilding.jpg'
import CardData from './CardData'
export default function Matter(props){
    return(
        <div className="card">
            <img src={props.image} alt="" className="card-image" />
            <h3 className="card-title">{props.heading}</h3>
            <h5 className="desc">{props.description}</h5>
        </div>
    );
}