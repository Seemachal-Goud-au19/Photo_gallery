import React from 'react'

 const Photo = ({id,thumbnailUrl,title}) => {
    return (
        <div className="photo">
         <img src={thumbnailUrl}alt="photo"/>

         <div className="detail">
          <p>Photo ID:{id}</p>
          <p>{title}</p>
         </div>
         
        </div>
    )
}


export default Photo;
