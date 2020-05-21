import React from "react"
import Reservation from './Reservation'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Reservation', () => {
const reservation = {
        id: 9,
        name: "Karl",
        date: "5/22",
        time: "6:30",
        number: 2
    }
    test('Reservation should render correctly', () => {
        const {getByText} = render(
            <Reservation reservation={reservation} />
        )
        expect(getByText("Karl")).toBeInTheDocument()
    })
})