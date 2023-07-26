import axios from "axios"
import './login.css'
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setuser } from "../../store/tocSlice";
import { useNavigate } from "react-router-dom";
function Login() {
    var [email, setemail] = useState();
    var [password, setpassword] = useState();
    var user2 = {
        email: email,
        password: password
    }
    var dispatch = useDispatch();
    var navigate = useNavigate();
    function nav(){
        navigate('/signup')
    }
    function loginuser() {
        axios.post('https://medicalstore.mashupstack.com/api/login', user2).then(response => {

            var user = {
                email: email,
                token: response.data.token
            }
            dispatch(setuser(user));
            navigate('/app');
        }).catch(() => { alert("token not set") })
    }
    return <div className="container-fluid bg-info body">
        <div className="row">


            <div className="col col-lg-4 col-md-3 col-sm-6 bg-light mx-auto d-block mt-5 rounded">
                <h2 className="mt-3 mb-5">Log In</h2>
                <label >email:</label>
                <input placeholder="email" value={email} className="form-control" type="email" onInput={(event) => setemail(event.target.value)} />
                <label className="mt-3">password :</label>
                <input placeholder="password" value={password} className="form-control mb-4" type="email" onInput={(event) => setpassword(event.target.value)} />
                <button className="btn btn-success mb-4 mx-auto d-block " onClick={loginuser}>Log in</button>
            </div>
        </div>
            <div className="row">

            <div className="col col-1 mt-5 mx-auto d-block">
            
            <button className="btn btn-outline-light float-left" onClick={nav}>Sign up</button>
            </div>
            </div>

    </div>
   
}
export default Login;