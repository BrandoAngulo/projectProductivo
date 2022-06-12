import { getConnection } from "../database/database";

//LISTAR
const getPersonas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_persona, nombre, apellido, tipodoc, numdocumento, correo, telefono, municipio, direccion FROM persona");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//LISTAR 1 DATO
const getpersona = async (req, res) => {

try {
    const {id_persona} = req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT id_persona, nombre, apellido, tipodoc, numdocumento, correo, telefono, municipio, direccion FROM persona WHERE id_persona = ?", id_persona);//recibe el parametro id que hemos hecho con la const por parametro 
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updatePersona = async (req, res) => {
    const {id_persona} = req.params;
    const {nombre, apellido, tipodoc, numdocumento, correo, telefono, municipio, direccion} = req.body;
    if (id_persona === undefined || nombre === undefined || apellido === undefined || tipodoc === undefined || numdocumento === undefined || correo === undefined || telefono === undefined || municipio === undefined || direccion === undefined ){
        res.status(400).json({message: "Bad Pequest. please fill all field "});
    }
    try {
        const dato = {id_persona, nombre, apellido, tipodoc, numdocumento, correo, telefono, municipio, direccion};
        const connection = await getConnection();
        const result = await connection.query("UPDATE persona SET ? WHERE id_persona = ?", [dato,id_persona]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deletePersona = async (req, res) => {

    try {
        const {id_persona}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM persona WHERE id_persona = ?", id_persona);//recibe el parametro id que hemos hecho con la const por parametro 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addPersona = async (req, res) => {
    try {
        const {nombre, apellido, tipodoc, numdocumento, correo, telefono, municipio, direccion} = req.body; 
            if (nombre === undefined || apellido === undefined || tipodoc === undefined || numdocumento === undefined || correo === undefined || telefono === undefined || municipio === undefined || direccion === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});
        }
        const dato = {nombre, apellido, tipodoc, numdocumento, correo, telefono, municipio, direccion};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO persona SET ?", dato);
        console.log(result);
        res.json({message: "persona added"});//respuesta cuando se agregue una persona
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exportar la funcion
export const methods = {
    getPersonas,
    getpersona,
    addPersona,
    deletePersona,
    updatePersona
};