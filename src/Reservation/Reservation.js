import React from 'react'
import './Reservation.css'

const Reservation = (props) => {
    const { id, name, date, time, number } = props.reservation

    return (
        <div className="reservations-wrapper">
            <h2 className="reservation-name">{name}</h2>
            <h3 className="reservation-date">{date}</h3>
            <h3 className="reservation-time">{time} pm</h3>
            <h3 className="reservation-number">Number of guests: {number}</h3>
            <button className ="cancel-reservation-button" onClick={props.cancelReservation}>Cancel</button>
        </div>
    )
}

export default Reservation