
import Round from "./round";
import { Link } from "react-router-dom";
function Bodyy() {

    return <div className="row" style={{ backgroundColor: "#FCFDFB", color: "black", height: "100%" }}>

        <Link to={'/list'}><Round name={'list view'} /></Link>
        <Link to={'/addmed'}><Round name={'add medicine'} /></Link>
        <Link to={'/list'}><Round name={'edit medicine'} /></Link>



    </div>
}
export default Bodyy;
