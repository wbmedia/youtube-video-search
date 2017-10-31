import React, { Component } from 'react';


import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import logo from './youtube.svg';
import './App.css';
import SearchBar from './components/search';
import VideoList    from './components/video_list';
import VideoDetail  from './components/video_detail';

const API_KEY = 'AIzaSyA6BCpKvNv3jhr5elVAjnSJdlpdnd4ZbgE';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],  // send an empty array for videos
      selectedVideo: null // if video is null will return a loading ...
    };

    this.videoSearch('wcw');

    
  }


  videoSearch(term) {
    // Callback YTSearch
    YTSearch({key: API_KEY, term: term }, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0],
     
    }); 
    //console.log(videos);
    });
  } 

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 400);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Youtube Search</h1>
        </header>
         <div className="container is-fluid is-widescreen">
          <div>
             <SearchBar onSearchTermChange={videoSearch}  />
          </div>
           <div>
             <VideoDetail video={this.state.selectedVideo} />
           </div>
           <div>
             <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }  
            videos={this.state.videos} />
           </div>
           
          </div> 
         </div>
    );
  }
}

export default App;