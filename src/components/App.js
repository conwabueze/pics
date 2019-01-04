import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            images: []
        }
    }
    onSearchSubmit = async (term) => {
        //first param address we want to get request from
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        })
        this.setState({images: response.data.results});
        /*
        then approach to waiting for request
        .then(response=>{
            console.log(response.data.results);
        });
        */
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div>Found {this.state.images.length} images</div>
            </div>
        );
    }
}

export default App;