import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";

const FriendForm = () => {
  const [friendData, setFriendData] = useState({name:"", age:"", email:""})
  // const [name, setName] = useState("")
  // const [age, setAge] = useState("")
  // const [email, setEmail] = useState("")

  const handleChange = e => {
    setFriendData(
      {
        ...friendData,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmit = e => {
    e.preventDefault()
    // const friendData = {
    //   name: name,
    //   age: age,
    //   email: email
    axiosWithAuth()
      .post("/friends", friendData)
      .then(res => { 
        console.log(e.target)
        setFriendData(
          {
            ...friendData,
            name: "",
            age: "",
            email:""
          }
        )
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        // onChange={e => setName(e.target.value)}
        type="text"
        name="name"
        value={friendData.name}
        placeholder="Friend's Name"
        onChange={handleChange}
      />
      <input
        // onChange={e => setAge(e.target.value)}
        type="text"
        name="age"
        value={friendData.age}
        placeholder="Friend's Age"
        onChange={handleChange}
      />
      <input
        // onChange={e => setEmail(e.target.value)}
        type="text"
        name="email"
        value={friendData.email}
        placeholder="Friend's email"
        onChange={handleChange}
      />
      <button type="submit">Add Friend!</button>
    </form>
  );
};

export default FriendForm;