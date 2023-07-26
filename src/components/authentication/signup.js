import axios from "axios";
import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    var [name, setname] = useState();
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var [password_confirmation, setPassword_confirmation] = useState();
    var goto = useNavigate();
    function signupuser() {
        var user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation

        }
        axios.post('https://medicalstore.mashupstack.com/api/register', user).then(() => { goto('/Login') }).catch(() => { alert("enter the correct value") })
    }
    return <div className="container-fluid bg-info body">
        <div className="row">
            <div className="col bg-light rounded pt-5 pb-3 col-lg-4 col-md-3 col-sm-6 mx-auto input2">
                <h2>Sign up</h2>
              
                <input placeholder="name" type="text" value={name} className="form-control mt-4" onInput={(event) => setname(event.target.value)} />
                
                <input placeholder="email" type="email" value={email} className="form-control mt-3" onInput={(event) => setEmail(event.target.value)} />
               
                <input  placeholder="password" type="password" value={password} className="form-control mt-3" onInput={(event) => setPassword(event.target.value)} />
                
                <input placeholder="confirmation password" type="password" value={password_confirmation} className="form-control mt-3" onInput={(event) => setPassword_confirmation(event.target.value)} /><br></br>
                <button className="btn btn-success mx-auto d-block" onClick={signupuser}>Sign Up</button>
            </div>
        </div>
    </div>
}
export default Signup;