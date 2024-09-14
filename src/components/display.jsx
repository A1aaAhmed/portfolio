import React from 'react'

const Display = () => {
  return (
    <div>
      <h1>{this.props.title}</h1>
      <img src={this.props.img} alt={this.props.alt}/>
      <p>{this.props.info}</p>
    </div>
  )
}

export default Display
