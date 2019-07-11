import React from 'react';

class SearchBar extends React.Component {
    state = {
        name: ''
    };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();

        //TODO: callback from parent component
        this.props.onSearchSubmit(this.state.name);
    }

    render() {
        return(
            <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Pokemon search: </label>
                    <input 
                        type='text' 
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})} 
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;