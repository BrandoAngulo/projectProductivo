import { getConnection } from "../database/database";

//LISTAR
const getRoles = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT `id_rol`, `descripcion` FROM `roles`");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//LISTAR 1 DATO
const getRol = async (req, res) => {

try {
    const {idRol} = req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT `id_rol`, `descripcion` FROM `roles` WHERE `id_rol` = ?", idRol);//recibe el parametro id que hemos hecho con la const por parametro 
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updateRol = async (req, res) => {
    const {idRol} = req.params;
    const {descripcion} = req.body;
    if (idRol === undefined || descripcion === undefined){
        res.status(400).json({message: "Bad Pequest. please fill all field "});
    }
    try {
        const rol = {descripcion};
        const connection = await getConnection();
        const result = await connection.query("UPDATE roles SET ? WHERE id_rol = ?", [rol,idRol]);//el primer ? es por los parametros que se le dan y el segundo para el id que se va a editar 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deleteRol = async (req, res) => {

    try {
        const {idRol}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM roles WHERE id_rol = ?", idRol);//recibe el parametro id que hemos hecho con la const por parametro 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addRol = async (req, res) => {
    try {
        //creacion de constantes que tenemos en la db para asi hacer la inserccion de datos a la misma db 
        const {descripcion} = req.body; //con req.body quiere decir que enviamos la peticion por el cuerpo del codigo
        //condicional si alguno de los campos se envian vacios
        if (descripcion === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});//solicitud mala. porfavor rellene todas los campos
        }
        //creacion de objeto para hacer la inserccion sin necesidad de digitar el query con tantos datos
        const rol = {descripcion};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO roles SET ?", rol);
        console.log(result);
        res.json({message: "rol added"});//respuesta cuando se agregue el lenguaje
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exportar la funcion
export const methods = {
    getRoles,
    getRol,
    addRol,
    deleteRol,
    updateRol
};