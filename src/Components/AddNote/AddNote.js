import React from 'react'
// import AddNoteStyle from './AddNoteStyle.css'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3)
    },
}));

function AddNote(props) {
    const classes = useStyles();
    return (
        <div>
            <Tooltip title="Add new note" aria-label="add">
                <Fab color="secondary" className={classes.fab} onClick={props.AddNewNote} >
                    <AddIcon />
                </Fab>
            </Tooltip>
        </div >
    )
}

export default AddNote