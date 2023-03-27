import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { crearNuevoProductoAction } from "../actions/productoActions";
import { mostrarAlerta, ocultarAlertaAction } from "../actions/alertaActions";

function NuevoProducto() {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const dispatch = useDispatch();
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    const submitNuevoProducto = e => {
        e.preventDefault();
        if (nombre.trim() === '' || precio.trim <= 0) {
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p-3'
            }

            dispatch(mostrarAlerta(alerta));

            return;
        }

        dispatch(ocultarAlertaAction());

        agregarProducto({
            nombre,
            precio
        });
    }

    return (
        <div className={"row justify-content-center"}>
            <div className={"col-md-8"}>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2 className={"text-center mb-4 font-weight-bold"}>
                            Agregar nuevo Producto
                        </h2>
                        { alerta && (
                            <p className={alerta.classes}>{alerta.msg}</p>
                        ) }
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className={"form-group"}>
                                <label htmlFor={"nombre"}>Nombre Producto</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    placeholder={"Nombre del producto"}
                                    name={"nommbre"}
                                    id={"nombre"}
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"precio"}>Precio Producto</label>
                                <input
                                    type={"number"}
                                    className={"form-control"}
                                    placeholder={"Precio del producto"}
                                    name={"precio"}
                                    id={"precio"}
                                    value={precio}
                                    onChange={e => setPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type={"submit"}
                                className={"btn btn-primary font-weight-bold text-uppercase d-block w-100"}
                            >Agregar</button>
                        </form>
                        { cargando ? <p className={"mt-3 text-center"}>Cargando...</p> : null }
                        { error ? <p className={"alert alert-danger p-2 mt-3 text-center"}>Ocurrió un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;