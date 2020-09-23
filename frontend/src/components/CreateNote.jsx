import React, { Component } from 'react'
import axios from 'axios';
import  DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {
    state = {
        users: [],
        userSelected: '',
        title: '',
        component: ' ',
        date: new Date()
    }
    async componentDidMount() {
       const res = await axios.get('http://localhost:4000/api/users');
       this.setState({
           users: res.data,
           userSelected: res.data[0].username 
       })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }
        await axios.post('http://localhost:4000/api/notes', newNote)
        window.location.href = '/';
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onChangeDate = date => {
        this.setState(date)
    }
    render() {
        return (
            <div className = "col-md-6 offset-md-3">
                <div className="card card-body">
                    <h3>Crear Publicacion</h3>
                    <form  onSubmit = {this.onSubmit}>
                        {/*Select user*/}
                        <div className="form-group">
                            <label > Usuario:</label>
                            <select className = "form-control" name ="userSelectet" onChange = {this.onInputChange}>
                                {
                                    this.state.users.map(user => 
                                        <option key = {user._id} value = {user.username}>
                                            {user.username}
                                        </option>
                                    )
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label > Ingresa un comentario:</label>
                            <textarea name="content" className = "form-control" placeholder = "content" required onChange = {this.onInputChange}></textarea>
                        </div>
                        <div className="form-group" hidden>
                            <DatePicker className = "form-control"
                                selected = {this.state.date}
                                onChange = {this.onChangeDate}
                            />
                        </div>
                        <label>Añadir una imagen</label>
                        <div className = "form-group ">
                            <input type="file"/>
                        </div>
                        <button type = "submit" className = "btn btn-primary">
                            Publicar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
