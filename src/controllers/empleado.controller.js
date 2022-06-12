import { getConnection } from "../database/database";


//LISTAR
const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_empleado, codigo, fecha_ingreso, fecha_salida, area, usuario, persona FROM empleado");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//LISTAR 1 DATO
const getempleado = async (req, res) => {

try {
    console.log(req.params);
    const {id_empleado}=req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT id_empleado, codigo, fecha_ingreso, fecha_salida, area, usuario, persona FROM empleado WHERE id_empleado = ?",id_empleado);
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updateEmpleado = async (req, res) => {
    const {id_empleado} = req.params;
    const { codigo, fecha_ingreso, fecha_salida, area, usuario, persona} = req.body;
if (id_empleado === undefined || codigo === undefined || fecha_ingreso === undefined || fecha_salida === undefined || area === undefined || usuario === undefined || persona === undefined) {
    res.status(400).json({message: "Bad Pequest. please fill all field "});
}
    try {
        const datos = {id_empleado, codigo, fecha_ingreso, fecha_salida, area, usuario, persona};
        console.log(req.params);
        const connection = await getConnection();
        const result = await connection.query("UPDATE empleado SET ? WHERE id_empleado = ?",[datos,id_empleado]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deleteEmpleado = async (req, res) => {

    try {
        console.log(req.params);
        const {id_empleado}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleado WHERE id_empleado = ?",id_empleado);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addEmpleado = async (req, res) => {
    try {
        const {codigo, fecha_ingreso, fecha_salida, area, usuario, persona}=req.body; 
        if (codigo === undefined || fecha_ingreso === undefined || fecha_salida === undefined || area === undefined || usuario === undefined || persona === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});
        }
        const datos = {codigo, fecha_ingreso, fecha_salida, area, usuario, persona};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO empleado SET ?",datos);
        console.log(result);
        res.json({message: "empleado added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exportar la funcion
export const methods = {
    getempleado,
    getEmpleados,
    addEmpleado,
    deleteEmpleado,
    updateEmpleado
};



