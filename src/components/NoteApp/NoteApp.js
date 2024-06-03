import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }


        this.noteTitleHandle = this.noteTitleHandle.bind(this) // this is add title to state note title
        this.inputColorHandle = this.inputColorHandle.bind(this)
        this.addToNote = this.addToNote.bind(this)
        this.removeNoteHandle = this.removeNoteHandle.bind(this)
        this.deleteInput = this.deleteInput.bind(this)
    }

    // this is add title to state note title
    noteTitleHandle(event) {
        this.setState({
            noteTitle: event.target.value
        })

    }

     // this is add color to state inputColor

    inputColorHandle(color) {
        this.setState({
            inputColor: color
        })

    }

    // add to notes for each noteTitle and color
    addToNote() {
        let { noteTitle, inputColor } = this.state
        let currentNote = { id: this.state.notes.length + 1, noteTitle, inputColor }
        this.setState((prevState) => {
            return { notes: [...prevState.notes, currentNote],
                    noteTitle:[],
                    inputColor:[]
             }
        })


    }
    // remove note for each noteId received 

    removeNoteHandle(noteId) {

        let newNotes = this.state.notes.filter((note) => {
            return note.id != noteId
        }) 
        this.setState({
            notes: newNotes
        })

    }

    // remove title and color in inputNoteTitle 
    deleteInput() {
        this.setState({
            noteTitle: [],
            inputColor: []
        })
    }
    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">My Note App</div>
                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" className="form-control" type="text" value={this.state.noteTitle} onChange={this.noteTitleHandle} style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>


                                            {this.state.colors.map((color) =>
                                            (
                                                <ColorBox color={color} receiveInputColor={this.inputColorHandle} />
                                            )
                                            )}



                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info" onClick={this.addToNote}><span className="fa fa-plus" ></span></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger" onClick={this.deleteInput}><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">

                                                {this.state.notes.map((note) => (
                                                    <Note {...note} key={note.id} removeNote={this.removeNoteHandle} />
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
