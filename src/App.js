import './App.css';
import { Switch ,Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

const ChairsPage = () => {
  return(
    <>
      <h1>Chairs page</h1>
    </>
  )
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />     
        <Route path='/chairs' component={ChairsPage} />     
      </Switch>
    </>
  );
}

export default App;
