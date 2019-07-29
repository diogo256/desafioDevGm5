import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import HomePage from './components/Home/IndexHome';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <main>
          <Route path={"/"} component={HomePage} />
        </main>
      </React.Fragment>
    )
  }
  
}

export default App
