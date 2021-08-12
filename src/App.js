import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useState, createContext } from 'react';
import LoginContainer from './components/LoginContainer'
import RegisterContainer from './components/RegisterContainer';
import ProductContainer from './components/ProductContainer';

export const ContextoDoLogin = createContext();

function App() {
  const [estaLogado, setEstaLogado] = useState(false);
  const [token, setToken] = useState();
  const [carregando, setCarregando] = useState(false)
  const [error, setError] = useState('')
  const valorPassadoPeloContexto = { estaLogado, setEstaLogado, token, setToken, carregando, setCarregando, error, setError };

  function RotasProtegidas(props) {
    return (
      <Route
        render={() => props.estaLogado ?
          (props.children) :
          <Redirect to='/login' />}
      />
    )
  }
  return (
    <ContextoDoLogin.Provider value={valorPassadoPeloContexto}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginContainer} />
          <Route path="/cadastro" exact component={RegisterContainer} />
          <Route path="/produtos" exact component={ProductContainer} />
        </Switch>
      </Router>
    </ContextoDoLogin.Provider>
  );
}

export default App;