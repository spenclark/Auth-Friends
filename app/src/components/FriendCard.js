import React from 'react'

const FriendCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>email: {props.email}</p>
    </div>
  )
}

export default FriendCard; 