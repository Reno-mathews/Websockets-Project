import { useState, useEffect } from 'react'
import './App.css'
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function App() {

  const [voteTotals, setVoteTotals] = useState

  useEffect(() => {
    socket.on("update_likes", (data) => setCount(data));
    return () => socket.off("update_likes");
  }, []);

return (
  <div>
    <h1>Live Likes: {count}</h1>
    <button onClick={() => socket.emit("add_like")}>👍 Like</button>
  </div>
);
}

export default App
