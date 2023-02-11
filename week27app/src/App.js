import './style/App.css';
import Rates from './components/Rates';
import data from './rates.json';

function App() {
  return (
    <div className="App">
      {
        data.map((rate) =>
          <Rates
            rateName={rate.rateName}
            rate={rate.rate}
            condition={rate.condition}
            color={rate.color}
            selected={rate.selected}
          />
        )
      }
    </div>
  );
}

export default App;
