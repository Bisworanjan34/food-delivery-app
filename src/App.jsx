import AllRoutings from './routes/AllRoutings'
import { LoginProvider } from './pages/login/LoginContext'
import './App.css'

function App() {
  
  return (
  <>
  <LoginProvider>
 <AllRoutings/>
  </LoginProvider>

  </>
  )
}

export default App
