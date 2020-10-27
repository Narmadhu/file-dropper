import React from 'react'
import "./DropBox.css"
import {Button, Card} from "react-bootstrap"


function DropBox() {
    return (
        <div className="drop-box" >
          <Card>  
          <form>
           <input type="text" className="invisible-input" />
            <img src="/images/images.jpg" className="file-add" />
            <input type="file" class="file-input" multiple></input>   
            <Card.Title className="file-heading">Drop your file</Card.Title>
            <Button className="file-btn" > Or Select your file </Button>
          </form>
          </Card>  
        </div>
    )
}

export default DropBox
