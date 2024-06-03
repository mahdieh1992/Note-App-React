import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props){
        super(props)
    }

    deleteNote(noteId){
        this.props.removeNote(noteId)

    }
    render() {
        let{id,noteTitle,inputColor}=this.props
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor:`${inputColor}` }} onClick={this.deleteNote.bind(this,id)}><p className="card-text p-3">{noteTitle}</p></div>
        )
    }
}
