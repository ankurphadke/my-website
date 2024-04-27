import './App.css';

import { BrowserView } from "react-device-detect";

import CompNavbar from './components/Navbar';
import CompWelcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1 className="Name">Ankur Phadke</h1>
      <CompNavbar />
      <CompWelcome />

    </div>
  );
}

export default App;
