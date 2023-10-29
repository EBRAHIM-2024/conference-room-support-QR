import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './screens/navigation/navigation';
import InfoComponent from './screens/info/Info';
import TicketComponent from './screens/tiket/ticket';
import { useEffect } from 'react';
import AVComponent from './screens/av/av';
// import Navigation from './screens/navigation/navigation';

function App() {

  return (
    <>
    <BrowserRouter >
     <Routes>
    <Route path="/" element={<Navigation/>}/>
    <Route path="/info" element={<InfoComponent />}/>
    <Route path="/av" element={<AVComponent />}/>
    <Route path="/tiket/:roomID" element={<TicketComponent/>} />
    </Routes>
    </BrowserRouter>

    </>

    // <BrowserRouter>
    // <Routes>
    //       <Route path="/" element={<Navigation/>}>
    //       {/* <Route path="/home" element={<HomeComponent />} />
    //       <Route path="/orders" element={<OrdersComponent />} />
    //       <Route path="/tiket/:roomID" element={<TiketComponent />} />
    //       <Route path="/users" element={<UsersComponent />} />
    //       <Route path="/info" element={<InfoComponent />} />
    //       <Route path="/sinUp" element={<Register />} />
    //       <Route path="/settings" element={<SettingsComponent />} />
    //       <Route path="/editEmployee/:employeeID" element={<EditEmployee />} />
    //       <Route path="/editBulding/:buildingID" element={<EditBulding />} />
    //       <Route path="/editRoom/:roomID" element={<EditRoom />} /> */}
    //       {/* <Route path='/login' element={<LoginComponent/>}/> */}
    //       {/* <Route path="contact" element={<Contact />} /> */}
    //       {/* <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    //   </BrowserRouter>
  );
}

export default App;
