import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App(){
  return(
    <div>
      <Header/>
      <div className="App-Area">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App