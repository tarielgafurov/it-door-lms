import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Grouplist from './components/UI/Grouplist';
import Sidebar from './components/UI/Sidebar';
import Instructors from './components/UI/Instructors';


function App() {
  
  return (
    <Router>
      <Sidebar/>
    <Routes>
     
      {/* <Route path="/" element={<Sidebar />} /> */}
      <Route path="/Grouplist" element={<Grouplist />} />
<Route path="/Instructors" element={<Instructors />} />

    </Routes>
  </Router>
     

    
  );
}

export default App;
