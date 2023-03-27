import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
import producto from "../components/Producto";

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            await clienteAxios.post('/productos', producto);
            dispatch( agregarProductoExito() );
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch(e) {
            console.error(e);
            dispatch( agregarProductoError(true) )
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Ocurrió un error al intentar cargar el producto'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true,
});

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
});

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,
});

export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargarProductosExito(respuesta.data));
        } catch(e) {
            console.error(e);
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true,
});

const descargarProductosExito = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos,
});

const descargarProductosError = () => ({
   type: DESCARGA_PRODUCTOS_ERROR,
   payload: true,
});

export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());
            Swal.fire(
                'Eliminado',
                `El producto ha sido eliminado.`,
                'success',
            )
        } catch(e) {
            console.error(e);
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = id => ({
   type: OBTENER_PRODUCTO_ELIMINAR,
   payload: id,
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true,
});

export function obtenerEditar(producto) {
    return (dispatch) => {
        dispatch(obtenerProductoEditarAction(producto));
    }
}

const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto,
});

export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto());

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExito(producto));
        } catch(e) {
            console.error(e);
            dispatch(editarProductoError())
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto,
});

const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
});