import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <div className="App ">
      
    <nav className='m-2 d-flex justify-content-between'>
        <Link to='/cardapio/cadastrar' className='link-custom-1'>Inserir um novo prato no menu</Link>
        <Link to='/cardapio/consultar' className='link-custom-2'>Consultar menu</Link>
        
    </nav>
    <h2 className='App-h2'>Cardápio online</h2>
    </div>
  );
}

export default App;