
import Bodyy from './components/bodyy';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import Search from './components/curd/search';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function App() {
  var navigate=useNavigate();
  var user=useSelector(store=>store.auth.user)
  if(user.token=='null'){
    navigate('/login')
  }
  else{

    return (
      

      <div className='container-fluid'>
      <Header/>
      <div className='row colo'>
        <div className='col'>
        <Search/>
        <div className='home'>

        <h3 className='text-warning'>Empowering Health.<br></br> Delivering Hope.
        <br></br><button onClick={()=>{navigate('/about')}} className='btn btn-warning text-white'>Learn more..</button></h3>
        </div>
        
        
        
        
        </div>
        <div className='col col-7 d-none d-lg-block  bg'>

        </div>
        
      </div>
  
      
      <Bodyy/>
      <Footer/>
    </div>
  );
}
}

export default App;
