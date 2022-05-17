import { getConnection } from "../database/database";

//LISTAR
const getusuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_usuario, nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol FROM usuario");
        res.json(result);
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
//listar con id
const getusuario = async(req, res) => {
    try {
        const {id_usuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_usuario, nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol FROM usuario WHERE id_usuario = ? ",id_usuario);
        res.json(result);
        console.log(result);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//DELETE
const deleteUsuario = async(req, res) => {
    try {
        const {id_usuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE id_usuario = ?",[usuario, id_usuario]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getusuarios,
    getusuario
};