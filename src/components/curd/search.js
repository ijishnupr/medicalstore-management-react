import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setsearch } from "../../store/searchSlice";
import { useNavigate } from "react-router-dom";
function Search() {
    var [query, setquery] = useState('');
    var navigate = useNavigate();
    var user = useSelector(store => store.auth.user)
    var dispatch = useDispatch();
    function fetch() {
        var tokenn = user.token
        var url = 'https://medicalstore.mashupstack.com/api/medicine/search?keyword=' + query;
        axios.get(url, { headers: { Authorization: "Bearer " + tokenn } }).then((response) => {
            var a = response.data;
            dispatch(setsearch(a));
            navigate('/search')

        })
    }
    return <div className="input-group">
        <input value={query} onChange={(event) => { setquery(event.target.value) }} type="text" placeholder="search..." className="  form-control" />
        <button onClick={fetch} className="btn btn-success">Search</button>
    </div>
}
export default Search;