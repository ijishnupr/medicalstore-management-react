import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import List from "../listview";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header";

function Result(){
    useEffect(() => {
        if (window.localStorage.getItem("user") == null) {
          navigate("/");}
        },[]);
    var val=useSelector(store=>store.search)
    var navigate=useNavigate();
    var query=useParams()
    var query=query.qur
    function to(id){
        var url = '/view/' + id;
        navigate(url);
    }
    
    var value = val.filter((item) => item.name.startsWith(query));
    if (value.length==0){
        return <Fragment>
            <Header/>
            <h3 className="text-danger text-center mt-5" >not medicines found</h3>
            
            </Fragment>
    }
 
    return <Fragment>

        <div className="container-fluid">
    <Header/>
            <h1>Search result</h1>
        <div className="row">
            <div className="col-6">
                { value.map((item)=><button className="col btn btn-outline-light text-left" onClick={()=>to(item.id)}>{item.id}&nbsp;&nbsp;{item.name}</button>) }
            </div>
        </div>
        </div>
    </Fragment>
}
export default Result;