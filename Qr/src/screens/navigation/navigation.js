import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
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
            <a class="navbar-brand mt- mt-lg-0">
              <img
                src={logo}
                width={100}
                height={40}
                alt="MDB Logo"
                // loading="lazy"

              />
            </a>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src={logo}
                height="20"
                alt="MDB Logo"
                loading="lazy"
              />
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
