import React from 'react';
import './App.css';
import { useState } from 'react';
import Friends from './Friends';

const data = [{ id: 1, name: "Ajinkya" },
{ id: 2, name: "Yogesh" },
{ id: 3, name: "Mohit" },
{ id: 4, name: "Sagar" },
{ id: 5, name: "Dipesh" }]



const App = () => {
  const [friend, setFriend] = useState(data);

  return (
    <>
      <div className="app">
        <h2>Number of friends : {friend.length}</h2>
        <Friends friends={friend} />
        <button className='btn btn-dark' onClick={() => { setFriend([]) }}>Clear All</button>
        <button className='btn btn-success mx-3' onClick={() => { setFriend(data) }}>Get All</button>
      </div>


    </>
  )
}

export default App
