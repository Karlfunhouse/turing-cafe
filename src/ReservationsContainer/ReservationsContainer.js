import React from 'react'
import './ReservationsContainer.css'
import Reservation from '../Reservation/Reservation'

const ReservationsContainer = (props) => {
    const allReservations = props.reservations.map(reservation => {
        console.log(reservation)
        return <Reservation
                    reservation={reservation}
                    key={reservation.id}
                    cancelReservation={props.cancelReservation} 
                 />
    })
        return (
            <section className='reservations-container'>
                {allReservations}
            </section>
        )

}

export default ReservationsContainer