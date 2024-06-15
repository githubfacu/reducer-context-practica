import UserProvider from './context/UserProvider'
import AppRouter from './route/AppRouter'

function App() {

  return (
    <div style={{background: 'black', padding: '4px'}}>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  )
}

export default App
