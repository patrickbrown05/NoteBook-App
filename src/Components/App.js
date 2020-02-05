import React from "react";
import NoteList from "./NoteList/NoteList";
import NotePad from "./NotePad/NotePad"


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            NoteCount: 0,
            CurrentNote: 0,
            NoteList: [{
                NoteNo: 0,
                Title: "",
                Content: ""
            }]
        }
    }

    updateNote = (Content) => {
        this.setState({
            NoteList: this.state.NoteList.map(el => (el.NoteNo === this.state.CurrentNote ? { ...el, Content } : el))
        });
    };

    updateTitle = (Title) => {
        this.setState({
            NoteList: this.state.NoteList.map(el => (el.NoteNo === this.state.CurrentNote ? { ...el, Title } : el))
        });
    };

    SelectNote = (NoteNo) => {
        this.setState({ CurrentNote: NoteNo, })
    }

    AddNote = () => {
        console.log(this.state.NoteCount)
        console.log("added")
        let newNote = {
            NoteNo: this.state.NoteCount + 1,
            Title: "",
            Content: ""
        }

        this.setState(
            { NoteList: this.state.NoteList.concat(newNote), NoteCount: this.state.NoteCount + 1 }
        );
    }

    render() {
        return (
            <div>
                <NoteList state={this.state} SelectNote={this.SelectNote} AddNewNote={this.AddNote} />
                <NotePad
                    Title={this.state.NoteList[this.state.CurrentNote].Title}
                    Content={this.state.NoteList[this.state.CurrentNote].Content}
                    updateNote={this.updateNote}
                    updateTitle={this.updateTitle}
                />
            </div>
        )
    }
}

export default App