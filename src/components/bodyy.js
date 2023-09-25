
import Round from "./round";
import { Link } from "react-router-dom";
function Bodyy() {

    return <div className="row" style={{ backgroundColor: "#72CAB1", color: "black", height: "100%" }}>

        <Link style={{textDecoration:'none'}} to={'/list'}><Round name={'list view'} /></Link>
        <Link style={{textDecoration:'none'}} to={'/addmed'}><Round name={'add medicine'} /></Link>
        <Link style={{textDecoration:'none'}} to={'/list'}><Round name={'edit medicine'} /></Link>



    </div>
}
export default Bodyy;
