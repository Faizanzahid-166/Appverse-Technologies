import { SearchWeather } from './components/index.js';
import "./App.css"; // <- for custom CSS

function App() {

  return (

     <div className="w-full min-h-screen animated-gradient">

      {/* search_weather */}
      <SearchWeather /> {/* pass setWeather to update App state */}

    </div>

  );
}

export default App;
