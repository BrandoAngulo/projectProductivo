import { getConnection } from "../database/database";

//LISTAR
const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_cliente, persona FROM cliente");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//LISTAR 1 DATO
const getCliente = async (req, res) => {

try {
    console.log(req.params);
    const {id_cliente}=req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT id_cliente, persona FROM cliente WHERE id_cliente = ?",id_cliente);
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updateCliente = async (req, res) => {
    const {id_cliente} = req.params;
    const {persona} = req.body;
if (id_cliente === undefined || persona === undefined) {
    res.status(400).json({message: "Bad Pequest. please fill all field "});
}
    try {
        const datos = {id_cliente, persona};
        console.log(req.params);
        const connection = await getConnection();
        const result = await connection.query("UPDATE cliente SET ? WHERE id_cliente = ?",[datos,id_cliente]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deleteCliente = async (req, res) => {

    try {
        console.log(req.params);
        const {id_cliente}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM cliente WHERE id_cliente = ?",id_cliente);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addCliente = async (req, res) => {
    try {
        const {persona}=req.body; 
        if (persona === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});
        }
        const datos = {persona};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO cliente SET ?",datos);
        console.log(result);
        res.json({message: "Cliente added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exportar la funcion
export const methods = {
    getClientes,
    getCliente,
    addCliente,
    deleteCliente,
    updateCliente
};




