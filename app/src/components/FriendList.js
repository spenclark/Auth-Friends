import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'

import FriendCard from './FriendCard'
import FriendForm from './FriendForm'

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => setFriends(res.data))
        .catch(err => console.error(err))
    })

    return (
        <>
        <FriendForm />
        <h2> Friend List </h2>
        {friends.map(friend => (
        <div>
          <FriendCard  key={friend.id} friend={friend} />
        </div>
      ))}
        </>
    )
}

export default FriendList