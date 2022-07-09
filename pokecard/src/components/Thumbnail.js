import React from 'react'

const Thumbnail = ({id, name, image, type}) => {

  const style = `thumb-container ${type}`
  return (
    <div className={style}>
      <div className="style">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  )
}

export default Thumbnail 