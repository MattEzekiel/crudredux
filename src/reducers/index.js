import { combineReducers } from "redux";
import ProductosReducer from "./ProductosReducer";
import alertaReducer from "./alertaReducer";

export default combineReducers({
   productos: ProductosReducer,
   alerta: alertaReducer,
});