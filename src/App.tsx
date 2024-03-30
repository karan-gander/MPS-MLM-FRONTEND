
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import CustomApiHandle from './controllers/CustomApiHandle'
import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        {/* <Route path='/' element={<CustomApiHandle/>} /> */}
      </Routes>
    </>
  )
}

export default App
