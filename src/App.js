import { useEffect, useState } from "react";
import Header from './components/header';
import Stories from './components/stories';

import "./App.css";

const API_URL = 'http://hn.algolia.com/api/v1/search?tags=front_page';
const API_SEARCH_URL = 'http://hn.algolia.com/api/v1/search?query=';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    console.log('mounted');
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setStories(data.hits))
      .catch(error => console.log('Error', error));
  }, [])

  // useEffect(() => {
  //   console.log('stories', stories);
  // }, [stories])

  const searchStories = (query) => {
    console.log('Input Updated', query);

    fetch(API_SEARCH_URL + query)
      .then(response => response.json())
      .then(data => setStories(data.hits));
  }

  return (
    <div className="App">
      <Header searchStories={searchStories} />
      <Stories stories={stories} />
    </div>
  );
}

export default App;


