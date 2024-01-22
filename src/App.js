import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';

/**
 * App component renders routes list
 *
 * props: none
 *
 * State: none
 *
 * App -> RoutesList
 *
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
