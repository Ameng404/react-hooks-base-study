
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Hits {
  author: string;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  title: string;
  url: string;
}


const App: React.FC = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <ul>
        {data.hits.map((item: Hits) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// 