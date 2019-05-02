import React, {Component} from 'react'
import Menu from './Menu'
import Profile from './Profile'
import AboutUs from './AboutUs'
import Experience from './Experience'
import Download from './Download'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Expenses from './Expenses'

class App extends Component{
  render(){
    return(
      <div>
        <Menu />
        <Profile />
        <AboutUs />
        <Experience />
        <Download />
        <Portfolio />
        <Contact />
        <Expenses />

      </div>
    )
  }
}

export default App
