import './App.css'
import ApartamentsList from './components/ApartamentsList/ApartamentsList.jsx'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Footer />
      <ApartamentsList />
    </div>
  )
}

export default App