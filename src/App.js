

import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar '
import Banner from './components/Banner/Banner'
import Rowpost from './components/Row post/Rowpost'
import { originals,actions,comedy,horror,romatic,Documentaries } from './Urls'


function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Rowpost  title="netflix originals " Urls={originals}/>
      <Rowpost title="action" issamll Urls={actions}/>
      <Rowpost title="comedy" issamll Urls={comedy} />
      <Rowpost title="horror" issamll Urls={horror} />
      <Rowpost title="romatic" issamll Urls={romatic} />
      <Rowpost title="Documentaries" issamll Urls={Documentaries} />

     
      
         






    </div>
  )
}

export default App