import './App.css'

import AppRouter from './routes/AppRouter'
// import { useLocation } from 'react-router-dom'

function App() {
  // const location = useLocation();
  // const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className='font-sans'>
      {/* {!hideNavbar && <Navbar />} */}
      <AppRouter />
    </div>
  )
}

export default App
