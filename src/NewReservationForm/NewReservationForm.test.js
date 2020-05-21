import React from 'react';
import NewReservationForm from "./NewReservationForm"
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('NewReservationForm', () => {
    const addReservation = jest.fn();

    test('should be able to render correctly', () => {
        const { getByText } = render(
            <NewReservationForm 
                addReservation={addReservation}/>
        )
        expect(getByText("Make A Reservation")).toBeInTheDocument()
    })

    test('should be able to add a new Reservation', () => {
        const { getByText, getByPlaceholderText } = render(
            <NewReservationForm 
                addReservation={addReservation}/>
        )
        const name = getByPlaceholderText('name')
        const date = getByPlaceholderText('date')
        const time = getByPlaceholderText('time')
        const number = getByPlaceholderText('number')
        const makeResButton = getByText('Make Reservation')

        fireEvent.change(name, {target: {value: 'Karl'}})
        fireEvent.change(date, {target: {value: '5/22'}})
        fireEvent.change(time, {target: {value: '6:30'}})
        fireEvent.change(number, {target: {value: 2}})
        fireEvent.click(makeResButton)

        expect(addReservation).toHaveBeenCalled()
        expect(addReservation).toHaveBeenCalledWith({name: 'Karl', date: '5/22', time: '6:30', number: '2'})
    })
})