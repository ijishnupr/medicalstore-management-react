import axios from "axios";
import { Fragment } from "react";
import { useSelector,useDispatch } from "react-redux";
import { dellist } from "../../store/listSlice";



function Delete(props) {
   
    var dispatch=useDispatch();
    var user = useSelector((store) => store.auth.user)
    var token = user.token;
    function Del() {
        var url = 'https://medicalstore.mashupstack.com/api/medicine/';
        var id = props.id;
        var url1 = url + id;
        console.log(url1)
        axios.delete(url1, { headers: { Authorization: "Bearer " + token } }).then(
            dispatch(dellist(id)),
           
        )



    }
    return <Fragment>

        <button onClick={Del} className="btn btn-danger mb-1 mt-1" data-toggle="modal" data-target="#exampleModal">Delete</button>

    </Fragment>
}

export default Delete;
