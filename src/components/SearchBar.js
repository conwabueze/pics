import React from 'react';

class SearchBar extends React.Component{
    state = {
        term: " "
    };

    onFormSubmit = (event) => {
        //prevent form submit form occuring on enter
        event.preventDefault();

        //onSearchSubmit App Component function prop
        //passing term from search bar up to App component
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className = "ui segment">
                <form onSubmit= {this.onFormSubmit} className = "ui form">
                    <div>
                        <label>Image Search</label>
                        <input type = "text" value = {this.state.term} onChange ={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;