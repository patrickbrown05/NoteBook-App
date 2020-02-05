import React from "react";

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            marginLeft: 75,
            fontFamily: "Times New Roman"
        },
    },
    Title: {
        width: "45%",
        marginTop: 0,
        fontWeight: "bold"

    },
    Notes: {
        width: "100%",
        height: "500px"
    },
    TimeNow: {
        position: "fixed",
        top: 0,
        right: 0,
        height: "25px",
        width: "95px",
        marginTop: 0
    }
});

class NotePad extends React.Component {
    render() {
        const { classes } = this.props;
        // eslint-disable-next-line no-extend-native
        Date.prototype.yyyymmdd = function () {
            var mm = this.getMonth() + 1; // getMonth() is zero-based
            var dd = this.getDate();

            return [this.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
            ].join('/');
        };

        var date = new Date();
        return (
            <div>
                <div className="title-div">
                    <div className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField
                                className={classes.Title}
                                autoFocus={true}
                                id="standard-basic"
                                label="Title"
                                size="medium"
                                value={this.props.Title}
                                onChange={(event) => this.props.updateTitle(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField label="Notes"
                                multiline
                                rows="46"
                                variant="outlined"
                                className={classes.Notes}
                                id="standard-basic"
                                value={this.props.Content}
                                onChange={(event) => this.props.updateNote(event.target.value)}
                            />
                        </div>
                    </ div>
                </div>
                <div>
                    <p className={classes.TimeNow}> {date.yyyymmdd().toString()} </p>
                </div>
            </div>
        );
    }
}


export default withStyles(useStyles)(NotePad)