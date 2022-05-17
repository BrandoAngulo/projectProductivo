import { getConnection } from "../database/database";

const getusuario = async (req, res) => {
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

export const methods = {
    getusuario
};