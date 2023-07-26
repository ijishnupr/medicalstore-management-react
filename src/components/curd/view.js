import { Fragment } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Viewmed() {
    const parms = useParams();
    var id = parms.id
    var data = useSelector((store) => store.list)
    var val = data.find((item) => item.id == id);
    console.log(val);

    return <Fragment>
        <div className="container-fluid">
            <Header />

            <div className="row ">
                <div className="col col-5 mx-auto d-block bg-light mt-5">
                    <h2 className="bg-success rounded text-white text-center">details of {val.name}</h2>
                    <h5>name :{val.name}</h5>
                    <h5>company :{val.company}</h5>
                    <h5>expiry :{val.expiry_date}</h5>


                </div>
            </div>
        </div>
    </Fragment>
}
export default Viewmed;