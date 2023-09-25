
import Bodyy from './components/bodyy';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import Search from './components/curd/search';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  var navigate=useNavigate();
  
    useEffect(()=>{
      if(window.localStorage.getItem('user')==null){

        navigate("/");
      }
      },[]);
    return (
      <div className='container-fluid'>
      <Header/>
      <div className='row colo'>
        <div className='col'>
        <Search/>
        <div className='home'>

        <h3 className='text-light'>Empowering Health.<br></br> Delivering Hope. <span id='cur'>|</span>
        <br></br><br></br><button onClick={()=>{navigate('/about')}} className='btn btn-danger text-white'>Learn more..</button></h3>
       
        </div>
         
        </div>
        <div className='col col-7 d-none d-lg-block  bg'>
          <img src='https://who-umc.org/media/drjfa4dj/lisa-in-pharmacy.gif' style={{width:'700px'}}></img>
        </div>
        
      </div>
  
      
      <Bodyy/>
      <Footer/>
    </div>
  );

}

export default App;
