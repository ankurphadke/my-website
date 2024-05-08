import './App.css';

import { BrowserView } from "react-device-detect";

import CompNavbar from './components/Navbar';
import CompAbout from './components/About';
import CompWork from './components/Work';
import CompSchool from './components/School';
import CompInterests from './components/Interests';
import { Routes, Route } from 'react-router-dom';

function App() {

  const Home = () => (
    <div className="AppBody">
      <CompAbout />
    </div>
  );

  const Work = () => (
    <div className="AppBody">
      <CompWork />
    </div>
  );

  const School = () => (
    <div className="AppBody">
      <CompSchool />
    </div>
  );

  const Interests = () => (
    <div className="AppBody">
      <CompInterests />
    </div>
  );

  return (
    <div className="App">
      <div className="AppHeader">
        <CompNavbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/work" element={<Work/>}></Route>
        <Route path="/school" element={<School/>}></Route>
        <Route path="/interests" element={<Interests/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
