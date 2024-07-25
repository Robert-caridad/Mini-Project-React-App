import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'
import ApartmentsList from './components/ApartmentsList/ApartmentsList.jsx'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ItemDetailsPage from './pages/ItemDetailsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
// import ApartmentCard from './components/ApartmentCard/ApartmentCard.jsx'

function App() {

  return (
    <div className='App'>

      <Navbar />

      <div className="viewport-content">
        <Sidebar />
        <Routes>
          <Route path='/' element={<DashboardPage />}></Route>
          <Route path='/aboutPage' element={<AboutPage />}></Route>
          <Route path='/ItemDetailsPage/:id' element={<ItemDetailsPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>

      </div>

      <Footer />
    </div>
  )
}

export default App