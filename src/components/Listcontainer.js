import { useEffect } from "react";
import List from "./listview";
import axios from "axios";
import { setlist } from "../store/listSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Search from "./curd/search";
function Listcontainer() {
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var user = useSelector(state => state.auth.user)
    if (user) {

        var tokenn = user.token;
    }
    else if (user == null) {
        var a = window.localStorage.getItem('user')
        var b = JSON.parse(a)
        tokenn = b.token;
    }
    else {
        navigate('/')
    }
    function getlist() {
        axios.get('https:medicalstore.mashupstack.com/api/medicine', { headers: { Authorization: "Bearer " + tokenn } }).then((response) => {
            var a = response.data;
            dispatch(setlist(a));

        }).catch(() => { navigate('/app') })
    }
    useEffect(() => {
        getlist()
    }, [])
    var value = useSelector(store => store.list);
    return <div className="container-fluid gre">
        <Header />
        <div className="row mt-5">
            <div className="col">
                <Search />
                <h3 className="mt-5">List view</h3>

                {value.map((list) => <List list={list} />)}
            </div>
            <div className="col d-none d-lg-block li">

            </div>

        </div>
    </div>
}
export default Listcontainer