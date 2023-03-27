import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductoAction, obtenerEditar } from "../actions/productoActions";
import Swal from "sweetalert2";

function Producto({producto}) {
    const { nombre, precio, id } = producto;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const confirmarEliminarProducto = id => {
        Swal.fire({
            title: `¿Estas seguro?`,
            text: `¿Estas seguro que deseas eliminar ${nombre}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.value) {
                dispatch(borrarProductoAction(id));
            }
        });
    }

    const redireccionarEdicion = producto => {
        dispatch(obtenerEditar(producto));
        navigate(`productos/editar/${producto.id}`);
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className={"font-weight-bold"}>$ {precio}</span></td>
            <td className={"acciones"}>
                <button
                    type={"button"}
                    onClick={() => redireccionarEdicion(producto)}
                    className={"btn btn-primary mr-3"}
                >Editar</button>
                <button
                    type={"button"}
                    className={"btn btn-danger"}
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default Producto;