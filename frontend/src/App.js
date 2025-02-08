import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [source, setSource] = useState('');

  useEffect(() => {
    fetch('/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setSource(data.source);
      });
  }, []);

  return (
    <div>
      <h1>Data from {source}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
