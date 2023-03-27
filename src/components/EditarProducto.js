import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";
import { useNavigate } from "react-router-dom";

function EditarProducto() {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: 0,
        id: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productoEditar = useSelector(state => state.productos.productoEditar);

    useEffect(() => {
        setProducto(productoEditar);
    }, [productoEditar])

    const { nombre, precio } = producto;

    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    }

    const submitEditarProducto = async e => {
        e.preventDefault();

        await dispatch((editarProductoAction(producto)));
        navigate('/');
    }

    return (
        <div className={"row justify-content-center"}>
            <div className={"col-md-8"}>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2 className={"text-center mb-4 font-weight-bold"}>
                            Editar el Producto
                        </h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className={"form-group"}>
                                <label htmlFor={"nombre"}>Nombre Producto</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    placeholder={"Nombre del producto"}
                                    name={"nombre"}
                                    id={"nombre"}
                                    value={nombre}
                                    onChange={e => onChangeFormulario(e)}
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
                                    onChange={e => onChangeFormulario(e)}
                                />
                            </div>
                            <button
                                type={"submit"}
                                className={"btn btn-primary font-weight-bold text-uppercase d-block w-100"}
                            >Modificar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;