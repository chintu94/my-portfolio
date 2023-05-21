import { Routes, Route } from "react-router-dom";
import './App.scss'
import {
  HomePage, NavBar, About,
  Experience, Skills,
} from "./components";


function App() {


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
      </main>
      <footer>
        Copyright @ Chintu
      </footer>
    </>
  )
}

export default App
