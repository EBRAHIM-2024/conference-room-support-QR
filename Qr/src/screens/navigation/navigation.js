import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import'./navigation.css';
import React, { useContext } from 'react';

const Navigation = () => {
  const navigate =useNavigate();
  // const {state,dispatch} = useContext(UserContext)
  // const user = JSON.parse(localStorage.getItem("user"))


    return (
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top " style={{height:80}}>
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <a class="navbar-brand ">
                <div class="item3">
                  <img
                src={logo}
                height="44"
                alt="MDB Logo"
                loading="lazy"
              />
                </div>
                <div className='grid-container '>
                <div class="item2">
                  <h1 className='title'>أرامكو السعودية<br/>
               Saudi Aramco</h1>
                </div>

              </div>

            </a>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand" href="#">
            <div className='grid-container '>
                <div class="item3">
                  <img
                src={logo}
                height="44"
                alt="MDB Logo"
                loading="lazy"
              />
                </div>
                <div class="item2">
                  <h1 className='title'>أرامكو السعودية<br/>
               Saudi Aramco</h1>
                </div>

              </div>
            </a>
          </div>
        </div>

      </nav>

  );
};



export default Navigation;


{/* <a
href="#"
className="list-group-item list-group-item-action py-2 ripple active"
>
<i className="fas fa-chart-area fa-fw me-3" />
<span>Home</span>
</a> */}
