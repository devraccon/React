import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthRoute from './component/AuthRoute';
import Counnter from './component/Counter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <AuthRoute path="/counter" component={Counnter} />
      </BrowserRouter>
    </div>
  );
}

export default App;
