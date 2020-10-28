import React,{useState} from 'react'
import "./DropBox.css"
import {Button, Card} from "react-bootstrap"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 100,
  duration: 1000,
})

function DropBox() {
   const [selectedFile,setSelectedFile]=useState("") 
   const [filesList,setFilesList]=useState([])

   const updateFile=(e)=>{
    setSelectedFile(e.target.files[0])
   }

   const getFile=(e)=>{
    e.preventDefault()
    if (selectedFile) return;
    setFilesList([{ key: Date.now(), name: selectedFile.current.files[0].name }, ...filesList]);
}
  

    return (
        <div className="drop-box">
          <Card >  
          <form onSubmit={getFile} >
           <input type="text" className="invisible-input" />
            <img src="/images/images.jpg" className="file-add" alt="Drop your file" />
            <input type="file" className="file-input" multiple onChange={updateFile} ></input>   
            <Card.Title className="file-heading">Drop your file</Card.Title>
            <Button className="file-btn" > Or Select a folder </Button>
          </form>
          </Card> 
            <div class="panel panel-primary" id="result_panel">
            <div class="panel-body">
            <ul class="list-group">
            <li class="list-group-item"><strong>Hello</strong></li>
            <li class="list-group-item"><strong>Hello</strong></li>
            <li class="list-group-item"><strong>Hello</strong></li>
            <li class="list-group-item"><strong>Hello</strong></li>
            <li class="list-group-item"><strong>Hello</strong></li>
            <li class="list-group-item"><strong>Hello</strong></li>
            <li class="list-group-item"><strong>Hello</strong></li>
            <li class="list-group-item"><strong>Hello</strong></li>
            </ul>
            </div>
            </div>
     
        </div>
         
    )
}


export default DropBox
