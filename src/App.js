import './App.css';

import { BrowserView } from "react-device-detect";

import CompNavbar from './components/Navbar';
import CompWelcome from './components/Welcome';
import CompFooter from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
        <CompNavbar />
      </div>
      <div className="AppBody">
        <CompWelcome />
      </div>
      <div className="AppFooter">
        <CompFooter />
      </div>

    </div>
  );
}

export default App;
