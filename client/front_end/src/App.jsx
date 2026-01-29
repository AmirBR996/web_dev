import './App.css'
import RegisterPage from './pages/register.page.jsx'
import LoginPage from './pages/login.page.jsx'
import Task_register from './pages/form_register.page.jsx'
import {BrowserRouter , Routes , Route} from "react-router"
function App() {

  return (
        <main className = "h-screen min-w-full tracking-wider">
          <BrowserRouter>
          <Routes>
            <Route path = "/login" element ={ <LoginPage/>} />
            <Route path = "/register" element = { <RegisterPage/> } />
          </Routes>
          </BrowserRouter>
        </main>
  )
}



export default App

