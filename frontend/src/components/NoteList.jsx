import React, { Component } from 'react'
import axios from 'axios';
import {format} from 'timeago.js';
export default class NoteList extends Component {
    state = {
        notes: []
    }
    componentDidMount() {
        this.getNotes();
    }
    async getNotes() {
        const res =  await axios.get('http://localhost:4000/api/notes')
        this.setState({notes: res.data})
    }
    deleteNote = async (id) => {
        
        const res = await axios.delete('http://localhost:4000/api/notes/' + id)
        this.getNotes();
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className = "col-md-8 offset-md-2" key = {note._id}>
                            <div className="card card-body mb-3">
                                <div>
                                    <p><strong>{note.author}</strong> - <span className = "text-muted">{format(note.date)}</span></p>
                                </div>
                                
                                    <p>{note.content}</p>
                                
                                <div className="card-footer ml-auto">
                                    <button className = "btn btn-danger" onClick = {() => this.deleteNote(note._id)}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                        
                }
            </div>

        )
    }
}
