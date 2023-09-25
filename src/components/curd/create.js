import { useSelector } from "react-redux";
import Header from "../Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Addmed() {
    var navigate = useNavigate();
    var [name, setname] = useState('');
    var [company, setcompany] = useState('');
    var [expiry, setexpiry] = useState('');

    useEffect(()=>{
        if(window.localStorage.getItem('user')==null){
  
          navigate("/");
          return null;
        }
        },[]);
      
    var user = window.localStorage.getItem('user')
    var userr = JSON.parse(user);
    var token=userr.token
    
    function postmed() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine', {
            name: name,
            company: company,
            expiry_date: expiry
        }, { headers: { Authorization: "Bearer " + token } })
            .then(navigate('/list')).catch(console.log('error'))

    }


    return <div className="container-fluid">
        <Header />
        <div className="row">
            <div className="col col-5 mx-auto d-block mt-5 form-group">
                <h1 className="mb-5 text-light "  >Add medicine</h1>
                <form>
                    <label>name :</label>
                    <input value={name} onChange={(event) => { setname(event.target.value) }} placeholder="name.." type="text" className="form-control" />
                    <label>company :</label>
                    <input value={company} onChange={(event) => { setcompany(event.target.value) }} placeholder="company.." type="text" className="form-control" />
                    <label>expiry date :</label>
                    <input value={expiry} onChange={(event) => { setexpiry(event.target.value) }} type="date" className="form-control" />
                    <button type="submit" onClick={postmed} className="btn btn-success mt-3 mx-auto d-block">Submit</button>

                </form>
            </div>
        </div>
    </div>
}
export default Addmed;