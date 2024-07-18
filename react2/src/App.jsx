// import './App.css'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={"Lista de productos"}/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContaioner/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
