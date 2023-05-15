import { Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from './components/Home'
import NavBar from './components/NavBar'
import About from "./components/About";
import Skills from "./components/Skills";
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
        </Routes>
      </main>
    </>
  )
}

export default App
