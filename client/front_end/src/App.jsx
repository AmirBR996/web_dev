import './App.css'
import RegisterPage from './pages/register.page.jsx'
import LoginPage from './pages/login.page.jsx'
import Task_register from './pages/form_register.page.jsx'
import {BrowserRouter , Routes , Route} from "react-router"
import Homepage from './pages/home.page.jsx'
import Notfound from './pages/not_found.jsx'
function App() {

  return (
        <main className = "h-screen w-full tracking-wider">
          <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Homepage/>}/>
            <Route path = "/login" element ={ <LoginPage/>} />
            <Route path = "/register" element = { <RegisterPage/> } />
            <Route path = "*" element = {<Notfound/>}/>
            {/* Dynamic Routing */}
            <Route path = "product/:id" element = {<div>Product Page</div>}/>

          </Routes>
          </BrowserRouter>
        </main>
  )
}



export default App

