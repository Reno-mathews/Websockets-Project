import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("update_likes", (data) => setCount(data));
    return () => socket.off("update_likes");
  }, []);

return (
  <div>
    <h1>Live Likes: {count}</h1>
    <button onClick={sendMessage}>Send Message</button>
  </div>
);
}
export default App
