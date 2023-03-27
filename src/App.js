import React, {Fragment} from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
// REDUX
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
          <Header />
          <div className={"container mt-5"}>
              <Routes>
                  <Route path={"/"} element={<Productos />} />
                  <Route path={"/productos/nuevo"} element={<NuevoProducto />} />
                  <Route path={"/productos/editar/:id"} element={<EditarProducto />} />
              </Routes>
          </div>
      </Provider>
    </Fragment>
  );
}

export default App;
