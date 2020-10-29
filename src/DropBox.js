import React,{useState} from 'react'
import "./DropBox.css"
import Image from "./Image"
import {Button, Card} from "react-bootstrap"


function DropBox() {
   const [selectedFile,setSelectedFile]=useState("") 
   const [listFiles,setListFiles]=useState([])

   const updateFile=(e)=>{
   setSelectedFile(e.target.files[0]);
   if (selectedFile==="") return
   setListFiles([{key:Date.now(),name:selectedFile.name}, ...listFiles])
 
   }

   const removeFile= (key)=>{
     setListFiles(listFiles.filter((listFile)=>listFile.key!==key))
   }

  // const Thumbnail=({image})=>{
  //    return(
  //       <img className="thumbnail" src={URL.createObjectURL(image)} alt={image.name} />
  //     )
  //    }
    return (
      <div className="grid">
        <div className="drop-box">
          <Card>  
          <form>
           <input type="text" className="invisible-input" />
            <img src="/images/images.jpg" className="file-add" alt="Drop your file" />
            <input type="file" accept="image/*" className="file-input" multiple onChange={updateFile} ></input>   
            <Card.Title className="file-heading">Drop your file</Card.Title>
            <Button className="file-btn" > Or Select a folder </Button>
          </form>
          </Card> 
          <div className="panel panel-primary" id="result_panel">
            <div className="panel-body">
            <ul className="list-group" >
              { listFiles.map((listFile)=>(
                <li  className="list-group-item" key={listFile.key} >    
                  {listFile.name}
                  <button className="delete" onClick={()=>removeFile(listFile.key)} >x</button>
                </li>
              )) }
               
               {/* Selected file appears with Thumbnail, name of the file */}

                 {/* <li className="list-group-item"> 
                 { selectedFile && <Thumbnail  image={selectedFile} /> }
                 <strong>{selectedFile.name}</strong>
                 </li>   */}
            </ul>
            </div>
            </div>
          </div>
        </div>
         
    )
}


export default DropBox
