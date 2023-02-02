import './style/App.css';
import Cards from './components/Cards';
import data from './heroes.json';

function App() {
  return (
    <div className="App">
      {
        data.map((hero) =>
          <Cards
            name={hero.name}
            alterego={hero.alterego}
            city={hero.city}
            group={hero.group}
            superpower={hero.superpower}
            imgsrc={hero.imgsrc}
          />
        )
      }
    </div>
  );
}

export default App;
