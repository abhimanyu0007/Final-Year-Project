import React,{useState} from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import FaceRecognition from './components/FaceRecognition';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [direct,setDirect] = useState(0);

  return (
    <>

      <div className="App">
          {direct===0 ? <Login setDirect={setDirect} direct={direct}/>: ""}
          {direct===1 ? <FaceRecognition setDirect={setDirect}/> : ""} 
      </div>
      {/* <Router>
        <div className="App">
          <Routes>
            <Route  exact path="/" element={<Login setDirect={setDirect}/>}/>
            <Route exact path="/register" element={<Register/>}/>


            {direct==1 ? <Route exact path="/facerecognition" element={<FaceRecognition/>}/>} 

          </Routes>
          {direct==1 && <FaceRecognition/>}
          
        </div>
      </Router> */}
    </>
  );
}

export default App;
