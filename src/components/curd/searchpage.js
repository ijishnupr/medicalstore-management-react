import { useSelector } from "react-redux"
import List from "../listview"
import { Fragment, useEffect } from "react";
import Header from "../Header";
import { useNavigate, useParams } from "react-router-dom";
import Delete from "./delete";
import Update from "./update";
function Searchpage() {
    var navigate=useNavigate();
    var qur=useParams()
    var query=qur.a
    var value = useSelector(store => store.search)
    useEffect(()=>{
        if(window.localStorage.getItem('user')==null){
  
          navigate("/");
        }
        },[]);
      
    
        var val = value.filter((item) => item.name.startsWith(query));
        if (val.length==0){
            return <Fragment>
                <Header/>
                <h1 className="text-danger" >not found</h1>
                
                </Fragment>
        }
        return <Fragment>
        

        <Header />
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-light pt-3">

                    {val.map((list) =>( <p>'hai'  <Update /></p> ))}
                </div>
               
            </div>
        </div>
      
    </Fragment>
}
export default Searchpage;