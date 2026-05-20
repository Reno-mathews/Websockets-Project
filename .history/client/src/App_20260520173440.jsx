import { useState, useEffect } from 'react'
import './App.css'
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function App() {

  const [voteTotals, setVoteTotals] = useState({ react: 0, vue: 0});

  useEffect(() => {
    socket.on("update_votes", (data) => {
    setVoteTotals(data);
  });

  return () => socket.off("update_votes");
},[]);

const putVotes = (framework) => {
  socket.emit("add_vote", framework);
};

return (
  <div style={{ textAlign: 'center', font}}
)

export default App;
