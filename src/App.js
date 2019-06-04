import React from 'react';
import './App.css';

import SearchInput from "./components/SearchInput/SearchInput";
import EmojiTable from "./components/EmojiTable/EmojiTable";
import filterEmoji from "./services/filterEmoji";
import {Container} from "@material-ui/core";
import TopBar from "./components/TopBar/TopBar";



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredEmoji: filterEmoji("", 20)
        };
    }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render (){
    return (
        <div>
            <TopBar/>
            <Container maxWidth="md" >
                <SearchInput textChange={this.handleSearchChange}/>
                <EmojiTable emojiData={this.state.filteredEmoji} />
            </Container>
        </div>

    );
  }
}

