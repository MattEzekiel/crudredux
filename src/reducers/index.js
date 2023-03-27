import { combineReducers } from "redux";
import ProductosReducer from "./ProductosReducer";

export default combineReducers({
   productos: ProductosReducer,
});