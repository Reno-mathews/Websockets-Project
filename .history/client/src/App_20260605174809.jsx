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
  <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px'}}>
    <h1> ⚡ Live Framework Poll ⚡ </h1>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', margin: '30px 0' }}>

    <div>
      <h2> React: {voteTotals.react}</h2>
      <button 
      style ={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      onClick={() => castVote('react')}
      >
        Vote React ⚛️
        </button>   
    </div>

    <div>
      <h2>Vue: {voteTotals.vue}</h2>
      <button
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer'}}
        onClick={() => castVote('vue')}
      >
        Vote Vue 🟢
      </button>
    </div>
    </div>

    <p style={{ color: '#665'}}>Open this in multiple tabs to see the numbers sync live!</p>
  </div>
)




export default App;

