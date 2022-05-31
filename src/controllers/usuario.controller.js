import { getConnection } from "../database/database";
//import bcryptjs para el hash de password
import bcrypt from "bcryptjs/dist/bcrypt";
import bcryptjs from "bcryptjs";

 //LISTAR
const getusuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT u.id_usuario, u.nombre, u.apellido, u.cedula, d.nombre departamento, m.nombre ciudad, u.direccion, u.correo, u.referido, r.descripcion perfil, u.pass password FROM usuario u inner JOIN roles r ON u.rol = r.id_rol inner join departamentos d on u.departamento = d.id_departamento inner join municipios m on u.ciudad = m.id_municipio;");
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
        const result = await connection.query("SELECT u.id_usuario, u.nombre, u.apellido, u.cedula, d.nombre departamento, m.nombre ciudad, u.direccion, u.correo, u.referido, r.descripcion perfil FROM usuario u inner JOIN roles r ON u.rol = r.id_rol inner join departamentos d on u.departamento = d.id_departamento inner join municipios m on u.ciudad = m.id_municipio WHERE u.id_usuario = ? ",id_usuario);
        res.json(result);
        console.log(result);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//INSERTAR
const addUsuario = async(req, res) => {
    try {
        const {nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol, pass} = req.body;
        
        if (nombre === undefined || cedula === undefined || departamento === undefined || ciudad === undefined || direccion === undefined || correo === undefined ||  celular === undefined || referido === undefined || rol === undefined || pass === undefined ) {
            res.status(400).json({message: "Bad Pequest. please fill all field "});
        };

        //let passHash = await bcryptjs.hash(pass, 8)
        const datos = {nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol, pass:passHash};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuario SET ?",datos);
        res.json("Message:  User added");
        console.log(result);
    } catch (error) {
        res.status(error);
        res.send(error.message);
    }
}


//DELETE
const deleteUsuario = async(req, res) => {
    try {
        const {id_usuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE id_usuario = ?", id_usuario);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//UPDATE
const updateUsuario = async (req, res) => {
    const {id_usuario} = req.params;
    const {nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol, pass} = req.body; 
    
    if (id_usuario ===undefined ||nombre === undefined || cedula === undefined || departamento === undefined || ciudad === undefined || direccion === undefined || correo === undefined ||  celular === undefined || referido === undefined || rol === undefined || pass === undefined) {
        res.status(400).json({message: "Bad Pequest. please fill all field "});
    }
    try {
            const datos = {id_usuario, nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol, pass}; 
            console.log(req.params);
            const connection = await getConnection();
            const result = await connection.query("UPDATE usuario SET ? WHERE id_usuario = ?",[datos,id_usuario]);
            res.json(result);
    } catch (error) {
        res.error(500);
        res.send(error.message);
    }


}

export const methods = {
    getusuarios,
    getusuario,
    addUsuario,
    deleteUsuario,
    updateUsuario
};