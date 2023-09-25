import { useSelector } from "react-redux";
import Header from "../Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    var navigate = useNavigate();
    var [name, setname] = useState('');
    var [company, setcompany] = useState('');
    var [expiry, setexpiry] = useState('');
    var user = useSelector(store => store.auth.user);
    var token = user.token;
    
    var val = useParams();
    var id = val.id
    var url = 'https://medicalstore.mashupstack.com/api/medicine/' + id;
    var data=useSelector((store)=>store.list);
    var value=data.find((item)=>item.id==id);

    function postmed() {
        axios.post(url, {
            name: name,
            company: company,
            expiry_date: expiry
        }, { headers: { Authorization: "Bearer " + token } })
            .then(navigate('/list'))

    }


    return <div className="container-fluid">
        <Header />
        <div className="row">
            <div className="col col-5 mx-auto d-block mt-5 form-group">
                <h1 className="mb-5 text-light "  >update medicine</h1>
                <form>
                    <label>name :</label>
                    <input value={name} onChange={(event) => { setname(event.target.value) }} placeholder={value.name} type="text" className="form-control" />
                    <label>company :</label>
                    <input value={company} onChange={(event) => { setcompany(event.target.value) }} placeholder={value.company} type="text" className="form-control" />
                    <label>expiry date :</label>
                    <input value={expiry} onChange={(event) => { setexpiry(event.target.value) }} type="date" className="form-control" />
                    <button type="submit" onClick={postmed} className="btn btn-success mt-3 mx-auto d-block">Submit</button>

                </form>
            </div>
        </div>
    </div>
}
export default Update;