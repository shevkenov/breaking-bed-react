import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/ui/Header';
import CharactersGrid from './components/characters/CharactersGrid';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')
  const [queryType, setQueryType] = useState('nickname');

  useEffect(() => {
    const fetchItems = async () => {
      console.log(queryType)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query, queryType]);
  
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} getQueryType={(v) => setQueryType(v)}/>
      <CharactersGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
