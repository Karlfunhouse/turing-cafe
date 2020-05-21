export const fetchReservations = async () => {
  
        let reservationsData = []
        const response = await fetch('http://localhost:3001/api/v1/reservations')
        const reservations = await response.json()
        return reservations
  
}