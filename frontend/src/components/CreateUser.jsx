import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {
    state = {
        users: [],
        username : '',
    }

    //se ejecuta una vez montado el componente
    async componentDidMount() {
        //devuelve un arreglo de la api
       const res = await axios.get('http://localhost:4000/api/users');
       this.setState({
           users: res.data
       });
        
    }
    
    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }
    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onSubmit = async e => {

        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.getUsers();
        console.log(respuesta);

    }
    render() {
        return (
            <div className = "row">
                <div className = "col-md-4">
                    <div className="card card-body">
                        <h3>Crear Usuario</h3>
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className = "form-control"
                                    onChange = {this.onChangeUserName}
                                />
                            </div>
                            <button type = "submit" className = "btn btn-dark btn-block">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
                <div className = "col-md-8">
                    <ul className = "list-group">
                        {
                            this.state.users.map(user => (
                                    <li
                                        className = "list-group-item list-group item-actio"
                                        key = {user._id}
                                    >
                                        {user.username}
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
