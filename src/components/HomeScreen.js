import React , { Component } from 'react';
import NavBar from "./NavBar"
import axios from '../axios';
import MainContent from './MainContent';

class HomeScreen extends Component {
    state = {
        images :[],
        
        searchString: ""
    
      };
    
      componentDidMount(){
        axios
        .get('/api/images')
        .then(data => {
          console.log( data.data);
            this.setState({ images: data.data
          })
          
          
        })
        .catch(err => console.error(err));
      }
    
      _onSearchChanged = text => this.setState({ searchString: text })
    render() {
        const displayedImages = this.state.images.filter(img => img.title.includes(this.state.searchString) || img.decription.includes(this.state.searchString))
        return(
            <div>
            <NavBar 
                onSearchChanged = {this._onSearchChanged}
                username = {this.props.username}
                onLogin = {this.props.onLogin}
            />
            <MainContent images ={displayedImages}/>
            </div>
        );
    }
}

export default HomeScreen;