import React from "react";
// import AddNoteStyle from './AddNoteStyle.css'

import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
});

class Note extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Tooltip title={this.props.Title} aria-label='add'>
          <Fab
            color={`${
              this.props.currentNote === this.props.NoteNumber
                ? "primary"
                : "secondary"
            }`}
            className={classes.fab}
            onClick={() => this.props.SelectNote(this.props.NoteNumber)}
          >
            {this.props.Icon}
          </Fab>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(useStyles)(Note);
