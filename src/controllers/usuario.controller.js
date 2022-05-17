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

export const methods = {
    getusuarios,
    getusuario
};