import './App.css';

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Login/Login';

import ApplicationForm from './views/ApplicationForm/ApplicationForm'

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/applicationForm" element={<ApplicationForm/>} />
      </Routes>
    </div>
  </Router>
);
  // return (
  //   <div className="App">
  //     <Login/>
  //   </div>
  // );


export default App;
