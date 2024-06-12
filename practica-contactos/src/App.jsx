import './App.css'
import UserProvider from './context/UserProvider'
import AppRouter from './route/AppRouter'

function App() {

  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  )
}

export default App
