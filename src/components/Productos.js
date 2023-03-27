import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import Producto from "./Producto";
import SinProductos from "./SinProductos";

function Productos() {
    const dispatch = useDispatch();

    useEffect(() => {
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
    }, []);

    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return (
        <Fragment>
            <h2 className={"text-center my-5"}>Listado de Productos</h2>
            { error && (
                <p className={"font-weight-bold alert alert-danger text-center"}>Hubo un error</p>
            ) }
            <table className={"table table-striped"}>
                <thead className={"bg-primary table-dark"}>
                    <tr>
                        <th scope={"col"}>Nombre</th>
                        <th scope={"col"}>Precio</th>
                        <th scope={"col"}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { cargando && (
                        <tr>
                            <td className={"text-center"} colSpan={"100%"}>Cargando...</td>
                        </tr>
                    ) }
                    { productos.length === 0 && !cargando ?
                        <SinProductos />
                        :
                        productos.map(producto => <Producto producto={producto} key={producto.id}/>)
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default Productos;