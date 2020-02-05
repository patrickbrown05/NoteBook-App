import React from "react";
import NoteListStyle from "./NoteListStyle.css"
import AddNote from "../AddNote/AddNote"
import Note from "../Note/Note"

class NoteList extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <div className="list-item">
                    <AddNote {...this.props} AddNewNote={this.props.AddNewNote} />
                </div>
                {
                    this.props.state.NoteList.map((item) => {
                        return (
                            <div className="list-item" key={item.NoteNo}>
                                <Note
                                    className="list-item"
                                    Title={item.Title}
                                    NoteNumber={item.NoteNo}
                                    Icon={item.NoteNo + 1}
                                    key={item.NoteNo}
                                    SelectNote={this.props.SelectNote}
                                />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default NoteList