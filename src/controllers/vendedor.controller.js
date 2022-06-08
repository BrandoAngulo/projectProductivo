import { getConnection } from "../database/database";


//LISTAR
const getVendedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_vendedor, id_user, codigo_vendedor, password FROM vendedor");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//LISTAR 1 DATO
const getVendedor = async (req, res) => {

try {
    console.log(req.params);
    const {id_vendedor}=req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT id_vendedor, id_user, codigo_vendedor, password FROM vendedor WHERE id_vendedor = ?",id_vendedor);
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updateVendedor = async (req, res) => {
    const {id_vendedor} = req.params;
    const {id_user, codigo_vendedor,password} = req.body;
if (id_vendedor === undefined || id_user === undefined || codigo_vendedor === undefined || password === undefined) {
    res.status(400).json({message: "Bad Pequest. please fill all field "});
}
    try {
        const datos = {id_vendedor, id_user, codigo_vendedor, password};
        console.log(req.params);
        const connection = await getConnection();
        const result = await connection.query("UPDATE vendedor SET ? WHERE id_vendedor = ?",[datos,id_vendedor]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deleteVendedor = async (req, res) => {

    try {
        console.log(req.params);
        const {id_vendedor}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM vendedor WHERE id_vendedor = ?",id_vendedor);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addVendedor = async (req, res) => {
    try {
        const {id_user, codigo_vendedor,password}=req.body; 
        if (id_user === undefined || codigo_vendedor === undefined || password === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});
        }
        const datos = {id_user, codigo_vendedor,password};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO vendedor SET ?",datos);
        console.log(result);
        res.json({message: "vendedor added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exportar la funcion
export const methods = {
    getVendedores,
    getVendedor,
    addVendedor,
    deleteVendedor,
    updateVendedor
};



