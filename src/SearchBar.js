import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        searchText: ""
    }
    
    handleSearchText(event) {
        this.setState({searchText: event.target.value})
    }

    render() {
        return (
            <div id='backgroundBox'>
                <input 
                type="text" 
                placeholder="Search for stuff..." 
                name="search" 
                value={this.state.searchText}
                onChange={this.handleSearchText.bind(this)}/>
            </div>
        )
    }
}

export default SearchBar;