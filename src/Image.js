import React from 'react'

 const Image=({image})=>{
     return(
        <img className="thumbnail" src={URL.createObjectURL(image)} alt={image.name} />
      )
     }

export default Image
