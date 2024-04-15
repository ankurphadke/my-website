import './App.css';

import { BrowserView } from "react-device-detect";

import CompNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1 className="Name">Ankur Phadke</h1>
      <BrowserView>
        <CompNavbar />
      </BrowserView>

    </div>
  );
}

export default App;
