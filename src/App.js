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
import ProductAdd from './components/ProductAdd';

export const ContextoDoLogin = createContext();

function App() {
  const [estaLogado, setEstaLogado] = useState(false);
  const [token, setToken] = useState();
  const [carregando, setCarregando] = useState(false);
  const [error, setError] = useState('');
  const [perfil, setPerfil] = useState('');
  const [produtoAtual, setProdutoAtual] = useState('');
  const valorPassadoPeloContexto = { estaLogado, setEstaLogado, token, setToken, carregando, setCarregando, error, setError, perfil, setPerfil, handleAlertClose, produtoAtual, setProdutoAtual };

  function handleAlertClose() {
    setError('');
  }

  function RotasProtegidas(props) {
    return (
      <Route
        render={() => props.estaLogado ?
          (props.children) :
          <Redirect to='/' />}
      />
    )
  }
  return (
    <ContextoDoLogin.Provider value={valorPassadoPeloContexto}>
      <Router>
        <Switch>
          <Route path="/cadastro" component={RegisterContainer} />
          <Route path="/" exact component={LoginContainer} />
          <RotasProtegidas estaLogado={estaLogado}>
            <Route path="/produtos" exact component={ProductContainer} />
            <Route path="/produtos/novo" component={ProductAdd} />
          </RotasProtegidas>
        </Switch>
      </Router>
    </ContextoDoLogin.Provider>
  );
}

export default App;