import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

const loadData = () => new Promise((resolve, error) => setTimeout(() => resolve(['isin1', 'isin2', 'isin3']), 1000))

const VIEW_AVAILABLE = [
  'cost',
  'yield',
  'rating',
  'payment'
];

function App() {
  const [isins, setIsins] = useState([]);
  const [view, setView] = useState('cost');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await loadData();
      setIsins(result);
      setIsLoading(false);
    };
    fetchData();
  }, ['']);

  console.log('isins', isins)
  return (
    <div className="myPortfolio">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Fragment>
          <Header
            viewActive={view}
            viewAvailable={VIEW_AVAILABLE}
            onChangeView={(view) => setView(view)}
          />
        </Fragment>
      )}
    </div>
  );
}
export default App;