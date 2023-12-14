import './App.css'
import AllPlayers from './compenents/AllPlayers'
import NewPlayersForm from './compenents/NewPlayerForm'
import SinglePlayers from './compenents/SinglePlayer'
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>
    <h1>Puppy Bowl React!</h1>
    <div id='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/NewPlayerForm'>Add Player</Link>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<AllPlayers/>}/>
        <Route path="/NewPlayerForm" element={<NewPlayersForm/>}/>
        <Route path="/puppy-details/:id" element={<SinglePlayers/>}/>
      </Routes>
    </div>
      
    </>
  )
}

export default App
