import { useState, useEffect } from 'react'
import './App.css'
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function App() {

  const [voteTotals, setVoteTotals] = useState({ react: 0, vue: 0});

  useEffect(() => {
    socket.on("update_votes", (data) => 
    setVoteTotals(data);
  });

return (
  <div>
    <h1>Live Likes: {count}</h1>
    <button onClick={() => socket.emit("add_like")}>👍 Like</button>
  </div>
);
}

export default App
