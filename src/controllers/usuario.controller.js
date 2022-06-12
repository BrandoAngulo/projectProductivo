import { getConnection } from "../database/database";
//import bcryptjs para el hash de password
import bcrypt from "bcryptjs/dist/bcrypt";
import bcryptjs from "bcryptjs";

 //LISTAR
const getusuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_usuario, nombre, password, rol FROM usuario");
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
        const result = await connection.query("SELECT id_usuario, nombre, password, rol FROM usuario WHERE id_usuario = ? ",id_usuario);
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
        const {nombre,rol, password} = req.body;
        
        if (nombre === undefined || password === undefined || rol === undefined) {
            res.status(400).json({message: "Bad Pequest. please fill all field "});
        };

        //let passHash = await bcryptjs.hash(pass, 8)
        const datos = {nombre, password, rol};
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
    const {nombre, rol, password} = req.body; 
    
    if (id_usuario === undefined ||nombre === undefined || password === undefined || rol === undefined) {
        res.status(400).json({message: "Bad Pequest. please fill all field "});
    }
    try {
            const datos = {id_usuario, nombre, password, rol}; 
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