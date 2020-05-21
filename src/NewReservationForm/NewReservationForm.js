import React, { Component } from "react"
import './NewReservationForm.css'

class NewReservationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0,
            error: ''

        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubit = (event) => {
        event.preventDefault();
        if (!this.state.name || !this.state.date || !this.state.time || !this.state.number) {
            this.setState({error: "Please fill out all areas on the form"})
            return
        }
        const newReservation = {
            id: Date.now(),
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            number: this.state.number
        }
        this.props.addReservation(newReservation)
        this.setState({
                name: '',
                date: '',
                time: '',
                number: 0,
                error: ''
        })
    }

    render() {
        return(
            <form className="reservation-form">
                <h2 className="form-title">Make A Reservation</h2>

                <div className="input-wrapper">
                    <div className="input-group">
                        <label for="name">Name:</label>
                        <input
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label for="date">Date:</label>
                        <input
                            name="date"
                            placeholder="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-group" >
                        <label for="time">Time:</label>
                        <input
                            name="time"
                            placeholder="time"
                            value={this.state.time}
                            onChange={this.handleChange}
                        />
                    </div>     
                    <div className="input-group">
                        <label for="number"># in Party:</label>
                        <input
                            name="number"
                            placeholder=""
                            value={this.state.number}
                            onChange={this.handleChange}
                            type="number"
                        />
                    </div> 
                </div>
                {this.state.error}
                <button onClick={this.handleSubmit}>Make Reservation</button>
            </form>
        )
    }
}

export default NewReservationForm