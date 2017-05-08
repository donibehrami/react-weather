import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { searchTerm: '' };
    }

    onInputChange (event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    onFormSubmit (event) {
        event.preventDefault();


    }

    render () {
        return (
            <form onSubmit = {this.onFormSubmit} className = "input-group">
                <input 
                    placeholder = "Search city for forecast"
                    className = "form-control"
                    value = {this.state.searchTerm}
                    onChange = {() => this.onInputChange}
                />
                <span className = "input-group-btn">
                    <button type = "submit" className = "btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps () {
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);