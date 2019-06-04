import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 100,
        width: 100,
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    control: {
        padding: theme.spacing(2),
    },
    label: {
        fontSize: 15
    },
    image: {
        margin: theme.spacing(2),
    }
}));

function EmojiRow (props){

    const classes = useStyles();
    const codePointHex = props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return (
        <Grid item >
            <Paper className={classes.paper} >
                <FormLabel className={classes.label}>{props.title}</FormLabel>
                <br/>
                <img alt={props.title} src={src} className={classes.image} style={{width:40, height:40}} />
            </Paper>
        </Grid>
);
}
export default EmojiRow;
