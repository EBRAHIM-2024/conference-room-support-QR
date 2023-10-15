import React, { useEffect, useState } from 'react';
import '../../App.css';
import BuldingComponent from '../bulding/buldingInfo';
import RoomComponent from '../room/roomInfo';
import Navigation from '../navigation/navigation';

function InfoComponent() {
  useEffect(()=>{
    fetch('https://conference-room-support-app-server.onrender.com/api/employee/getBuldings',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result);
    })
 },[])
  return (
    <div className="App">
      <Navigation/>
      <BuldingComponent/>
      <RoomComponent/>
    </div>
  );
}

export default InfoComponent;
