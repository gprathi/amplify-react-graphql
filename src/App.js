import './App.css';
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { LeadCreateForm } from './ui-components';
import { Activities } from './pages/Activities';
import { HotelSearch } from './pages/HotelSearch';
import { Link, Route, Routes, Outlet} from 'react-router-dom';
import logo from './images/tidesandtravels1.png';
import Home from './pages/Home';
import About from './pages/About';




function  App({ signOut, user }) {

  // return (
  //   <div  className="App">
  //     <Heading level={1}>Hello {user.username}</Heading>
  //     {/* <div>{response}</div> */}
  //     <Button onClick={signOut}>Sign out</Button>
  //     <HotelSearch />
  //     <LeadCreateForm />
  //   </div>
  // );

  return (
    <>
      <div className="nav">
        <img src={logo} alt="logo" draggable={false} />
        <div className="links">


          <Link className="link" to="/about">Why Tides&Travels</Link>
          <Link className="link" to="/hotels">Hotels</Link>
          <Link className="link" to="/activities">Activities</Link>
          <Link className="link" to="/LeadForm">Lead Form</Link>
          <Link className="link" to="/extras">EXTRAS</Link>
          <Link className="link" to="/booked">ALREADY BOOKED</Link>
          <Button onClick={signOut}>Sign out</Button>
        </div>
        <Outlet />
      </div>

      <div className="center">
      <Routes>
        <Route exact path="/"  element={<Home />}  />
        <Route path="/hotels" element={<HotelSearch />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/LeadForm" element={<LeadCreateForm />} />
        <Route path="about" element={<About />} />

      </Routes> 



       </div>
    </>
  );
}

export default withAuthenticator(App);
