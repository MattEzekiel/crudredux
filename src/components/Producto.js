import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../actions/productoActions";
import Swal from "sweetalert2";

function Producto({producto}) {
    const { nombre, precio, id } = producto;
    const dispatch = useDispatch();

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

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className={"font-weight-bold"}>$ {precio}</span></td>
            <td className={"acciones"}>
                <Link
                    to={`/productos/editar/${id}`}
                    className={"btn btn-primary mr-3"}
                >Editar</Link>
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