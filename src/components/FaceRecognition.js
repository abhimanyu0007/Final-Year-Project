import React, { useState } from 'react';
import './FaceRecognition.css'
import { Link } from 'react-router-dom';
import Table from './Table';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBFile
  }
  from 'mdb-react-ui-kit';

function App(props) {

    const[tab,setTab] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleLogout=()=>{
        props.setDirect(0);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
    
        fetch("http://127.0.0.1:5000/api/upload-image", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });

          setTab(1);
      };

    const data = [{"id": "BECOA111", "student_name": "Abhimanyu_BabarPatil", "attend_status": "present"}, 
    {"id": "BECOA101", "student_name": "Omkar_Waingade", "attend_status": "absent"}, 
    {"id": "BECOA102", "student_name": "Rahul_Pawar", "attend_status": "absent"}, 
    {"id": "BECOA103", "student_name": "Harshad_Gurav", "attend_status": "absent"}, 
    {"id": "BECOA105", "student_name": "Kartik_Deshmukh", "attend_status": "present"}, 
    {"id": "BECOA106", "student_name": "Suyog_Mokashi", "attend_status": "present"}, 
    {"id": "BECOA110", "student_name": "Avadhoot_Autade", "attend_status": "present"}, 
    {"id": "BECOA107", "student_name": "Sanket_Patil", "attend_status": "present"}, 
    {"id": "BECOA108", "student_name": "Pratik_Rabade", "attend_status": "present"}]

    const handleFileInput = (event) => {
        setSelectedFile(event.target.files[0]);
    };

  return (
    <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                <p style={{color:"white",textShadow:"2px 2px 4px #000000", margin:"0px 0px 0px 350px",
                fontSize:"60px", fontFamily:"Oswald"}}>Attendance Monitoring System</p>
                {/* <div className="container d-flex justify-content-end"> */}
                <button onClick={handleLogout} type="button" class="btn btn-danger">LogOut</button>
                {/* </div> */}
                </div>
                
            </nav>

            
        <div className="container" style={{width:"fit-content", padding:"84px 0px 0px 0px", margin:"0px 0px 0px 380px"}}>

        

            <div className="container d-flex align-items-center flex-column" style={{margin:"20px 0px 0px 0px", width:"750px"}}>

            <p style={{fontWeight:"bold", fontSize:"20px", color:"white"}}>Select Image File</p>
            
            <div className="container d-flex bd-highlight mb-3">
                <MDBFile onChange={handleFileInput} className="p-2 bd-highlight" wrapperclassname='mb-4 w-100' id='formControlLg' type='file' size="lg"/>
                <button onClick={handleSubmit} style={{margin:"0px 0px 0px 16px", width:"88px"}} className="p-2 bd-highlight btn btn-success" type="button">Upload</button>
            </div>



            {/* <div className="container" style={{margin:"45px 0px 0px 0px"}}>
                <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' ></img>
            </div> */}


            </div>
            
            <div className="container" style={{margin:"80px 0px 0px -120px", width:"1000px"}}>

                {tab===1 ? <Table data={data}/> :<h2 style={{color:"white"}}>Please upload image</h2>}
            </div>
        </div>
    </>
  );
}

export default App;