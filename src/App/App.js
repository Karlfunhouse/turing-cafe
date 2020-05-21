import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from './apiCalls'
import ReservationsContainer from './../ReservationsContainer/ReservationsContainer'
import NewReservationForm from './../NewReservationForm/NewReservationForm'

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

  addReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations, reservation] })
  }

  cancelReservation = (reservation) => {

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <NewReservationForm addReservation={this.addReservation}/>
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
