import React from 'react';

function EditarProducto() {
    return (
        <div className={"row justify-content-center"}>
            <div className={"col-md-8"}>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2 className={"text-center mb-4 font-weight-bold"}>
                            Editar el Producto
                        </h2>
                        <form>
                            <div className={"form-group"}>
                                <label htmlFor={"nombre"}>Nombre Producto</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    placeholder={"Nombre del producto"}
                                    name={"nommbre"}
                                    id={"nombre"}
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