import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from './apiCalls'
import ReservationsContainer from './../ReservationsContainer/ReservationsContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }

  }
  
  componentDidMount = async () => {
    const reservationsData = await fetchReservations()
    this.setState({reservations: reservationsData})
  }

  cancelReservation = (reservation) => {

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsContainer 
          reservations={this.state.reservations} 
          cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
