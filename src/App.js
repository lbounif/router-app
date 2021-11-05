import './App.css';
import { Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Articles from "./components/Articles"
import Home from "./components/Home"
import Forums from "./components/Forums"
import Contacts from "./components/Contacts"
import Messages from "./components/Messages"

function App() {
  return (
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/messages/:id" element={<Messages/>} />
            <Route path="/forums" element={<Forums/>} />
          </Routes>
      </div>
 
  );
}

export default App;
