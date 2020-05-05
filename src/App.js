import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CostContainer from './components/CostContainer';
import LoadingSpinner from './components/Common/LoadingSpinner';
import RatingContainer from './components/RatingContainer';
import YieldContainer from './components/YieldContainer';

const loadData = () => new Promise((resolve, error) => setTimeout(() => resolve(['isin1', 'isin2', 'isin3', 'isin4', 'isin5', 'isin6']), 500))

const VIEW_AVAILABLE = [
  'cost',
  'yield',
  'rating',
  'payments'
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

  return (
    <div className="myPortfolio">
      {isLoading ? (
        <div className="myPortfolio_loading">
          <LoadingSpinner />
        </div>
      ) : (
        <Fragment>
          <Header
            viewActive={view}
            viewAvailable={VIEW_AVAILABLE}
            onChangeView={(view) => setView(view)}
          />
          {view === 'cost' && <CostContainer isins={isins} />}
          {view === 'yield' && <YieldContainer isins={isins} />}
          {view === 'rating' && <RatingContainer isins={isins} />}
          {view === 'payments' && <CostContainer isins={isins} />}
        </Fragment>
      )}
    </div>
  );
}
export default App;