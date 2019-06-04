import React from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

export default class SearchInput extends React.Component {
    static propTypes = {
        textChange: PropTypes.func
    };

    handleChange = event => {
        this.props.textChange(event);
    };

    render() {
        return (
            <div>
                <TextField variant="outlined" label="Search"  margin="normal" fullWidth placeholder="Search Emojis" onChange={this.handleChange}/>
            </div>

        );
    }
}
