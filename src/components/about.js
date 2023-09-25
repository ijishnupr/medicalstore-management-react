import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function About() {
    var navigate=useNavigate();
    useEffect(()=>{
        if(window.localStorage.getItem('user')==null){
  
          navigate("/");
        }
        },[]);
      
    
    return <div className="container-fluid">
        <Header />
        <div className="row">
            <div className="col mt-5">
                <h2>About us</h2>
                <p style={{fontSize:'20px',textAlign:'left',textIndent:'40px'}} className="mt-5">This is a pharmacy website user can add delete edit medicine
                The Medical Store Management System is a comprehensive and user-friendly
                    software designed to streamline the operations of a medical store or pharmacy.
                    The system aims to efficiently manage the inventory, sales, purchases, and overall
                    workflow within a medical store, enhancing productivity, accuracy, and customer service.</p>
            </div>
        </div>
    </div>
}
export default About;