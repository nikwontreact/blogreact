
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import SignIn from './pages/SignIn'
const App = () => {
  return (<>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/createaccount' element={<CreateAccount/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    
   </Routes>
   </BrowserRouter>
  </>
  )
}

export default App
