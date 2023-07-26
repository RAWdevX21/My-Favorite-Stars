import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from "./ContactList";
import Post from "./Post";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "RAWdevX21",
  lastName: "Coder",
};

const hello = <h1>Hello, {formatName(user)}!</h1>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        {hello}
        <h2>Feed</h2>
        <Post />
        <Post />
        <ContactList />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React is Super Cool! TOTALLY!!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
