import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './av.css';
import img1 from '../../assets/images/1.jpg';
import { useNavigate } from 'react-router-dom';




function AVComponent() {
const navigate=useNavigate();

const handleShow = () => navigate('/');


  return (
<div className="App">
                <div className='img'>
                  <img className='col-xl-6 col-sm-12 col-12'
                src={img1}
                alt="MDB Logo"
                loading="lazy"
              />
              </div>
              <div className='img'>
                  <img className='col-xl-6 col-sm-12 col-12'
                src={img1}
                alt="MDB Logo"
                loading="lazy"
              />
              </div >
              <div className='img'>
                  <img className='col-xl-6 col-sm-12 col-12'
                src={img1}
                alt="MDB Logo"
                loading="lazy"
              />
              </div >
              <div >
               <button className="col-xl-6 col-sm-12 col-12 button2"onClick={()=>navigate(-1)} size="lg">Need more help?</button>
               </div>
 </div>


  );
}

export default AVComponent;



// className='d-none'



