import axios from "axios";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setsearch } from "../../store/searchSlice";
import { Link, useNavigate } from "react-router-dom";
function Search() {
    var [query, setquery] = useState(null);
    var navigate = useNavigate();
    var user = useSelector(store => store.auth.user)
    var dispatch = useDispatch();
    var a ;
    var url;
    function fetch() {
        var tokenn = user.token
        var url = 'https://medicalstore.mashupstack.com/api/medicine/search?keyword=' + query;
        axios.get(url, { headers: { Authorization: "Bearer " + tokenn } }).then((response) => {
             a = response.data;
            dispatch(setsearch(a));
            var url2='/search/'+query
            navigate(url2)
            
        })
    }
  
    
    return <Fragment>

     <div className="input-group">
        <input value={query} onChange={(event) => { setquery(event.target.value) }} placeholder="search..." type="text" className="  form-control" />
        <button className="btn btn-danger" onClick={fetch}>search</button>
    </div>
   
    </Fragment>
}
export default Search;