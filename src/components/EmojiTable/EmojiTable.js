import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import EmojiRow from "../EmojiRow/EmojiRow";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing(2)
    },
}));

function EmojiTable (props) {
    const [spacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    { props.emojiData.map(emojiData => (
                        <EmojiRow
                            key={emojiData.title}
                            symbol={emojiData.symbol}
                            title={emojiData.title}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );

}

export default EmojiTable;
