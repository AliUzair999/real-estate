import logo from './logo.svg';
import './App.css';
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'
import Services from './views/Services/Services'

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext/ThemeContext';
import { Routes, Route } from 'react-router-dom'

function App() {
  // console.log("chaling")

  const {theme} = useContext(ThemeContext)
  // console.log(theme)

  return (<>
    <div className='App' style={{npm: (theme === "light" ? "white" : "black"), color: (theme === "light" ? "black" : "white")}} >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Home />} />
          <Route path='/learn' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  </>);
}

export default App;
