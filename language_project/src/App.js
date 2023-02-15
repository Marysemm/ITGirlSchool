import './assets/styles/App.css';
import Header from './assets/components/Header/Header';
import Words from './assets/components/Words/Words';
import WordCollection from './assets/components/WordCollection/WordCollection';

function App() {
  return (
    <div className="App">
      <Header />
      <Words />
      <WordCollection />
    </div>
  );
}

export default App;
