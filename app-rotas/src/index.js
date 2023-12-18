import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastro from './componentes/cadastro';
import Consultar from './componentes/consulta';
import Editar from './componentes/edicao';


const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cardapio/cadastrar",
        element: <Cadastro />
      },

      {
        path: "/cardapio/consultar",
        element: <Consultar />
      },
      
      {
        path: "/cardapio/editar/:idCardapio",
        element: <Editar />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
