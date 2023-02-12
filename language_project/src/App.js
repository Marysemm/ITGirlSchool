import './assets/styles/App.css';
import Header from './assets/components/Header/Header';
import Words from './assets/components/Words/Words';
import data from './words.json';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards__wrapper">
        {
          data.map((words) =>
            <Words
              english={words.english}
              transcription={words.transcription}
              russian={words.russian}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
