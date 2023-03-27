import React, {Fragment} from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos";

function App() {
  return (
    <Fragment>
      <Header />
        <div className={"container"}>
            <Routes>
                <Route
                    exact
                    path={"/"}
                    component={Productos}
                />
            </Routes>
        </div>
    </Fragment>
  );
}

export default App;
