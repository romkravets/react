import React, { Component } from 'react';
import './App.scss';
import { Title } from './components/title/Title';
import { PhotoGallery }  from './components/photoGallery/PhotoGallery';
import { MoreButton }  from './components/moreButton/moreButton';
import { SearchForm } from './components/SearchForm/SearchForm';

const apiUrl = 'https://api.unsplash.com/search/photos?page=1&query=${SEARCH_PARAM}&client_id=42f00e5ccf3bce6f62206323d3163d3b46ba5674d3196d610db0d2a08434ffd0';

class App extends Component {
  private search = (value: string) => {
    const axios = require('axios');
    console.log(value);
    const respone = await axios.get(apiUrl.replace('$SEARCH_PARAM', value));
    console.log(respone);

  }
  public render() {
    return (
      <div>
      <div className="Bgi">
        <div className="App">
        <header className="App__header">
        <Title />
        <SearchForm  onSubmit={this.search}/>
        </header>
        </div>
      </div>
       <PhotoGallery />
       <MoreButton />
       </div>
    );
  }
}

export default App;
