
import { Route, Routes } from 'react-router-dom'
import Navber from '../Navber/Navber'
import Home from '../pages/Home/Home'
import Abouts from './../pages/Abouts/Abouts';
import Portfolio from '../pages/Portfolio/Portfolio';
import Services from './../pages/Services/Services';
import Contacts from '../pages/Contacts/Contacts'

function Root() {
  return (
    <div>
        <Navber/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/'element={<Home/>}/>
          <Route path='/abouts'element={<Abouts/>}/>
          <Route path='/portfolio'element={<Portfolio/>}/>
          <Route path='/services'element={<Services/>}/>
          <Route path='/contacts'element={<Contacts/>}/>
        </Routes>
    </div>
  )
}

export default Root