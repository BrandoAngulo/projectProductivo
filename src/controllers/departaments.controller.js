import { getConnection } from "../database/database";

//Listar 
const getDepartamentos = async (req, res) => {

    try {
    
    const connection = await getConnection();
    const result = await connection.query("SELECT id_departamento, nombre, codigo FROM departamentos");
    res.json(result);
        
    } catch (error) {

    res.status(500)
    res.send(error.message);    

    }
    
}
//Listar 1 dato

const getDepartamento = async (req, res) =>{

    try {

    console.log(req.params);
    const {id_departamento} = req.params 
    const connection = await getConnection();
    const result = await connection.query("SELECT id_departamento, nombre, codigo FROM departamentos WHERE id_departamento = ?", id_departamento);
    res.json(result);

    } catch (error) {
        
        res.status(500);
        res.send(error.message);
    }

}

//update
const updateDepartamento = async (req, res) =>{
    
    const {id_departamento} = req.params;
    const {nombre, codigo} = req.body;

    if (id_departamento === undefined || nombre === undefinded || codigo === undefined) {
        res.status(400).json({message:"Bad request. please fill all field"});   
    }

    try {
        const datos = {id_departamento, nombre, codigo};
        console.log(req.params);
        const connection = await getConnection();
        const result = await connection.query("UPDATE departamentos SET ? WHERE id_departamento = ?",[datos,id_departamento]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//DELETE
const deletedepartamento = async (req, res) => {

    try {
        console.log(req.params);
        const {id_departamento}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM departamentos WHERE id_departamento = ?",id_departamento);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

    //INSERTAR
    const addDepartamento = async (req, res) => {
        try {
            
            const {codigo, nombre}=req.body; 
            
            if (codigo === undefined || nombre === undefined) {
                res.status(400).json({message: "Bad Request. Please fill all field. "});
            }
            const datos = {codigo, nombre};
            const connection = await getConnection();                                     
            const result = await connection.query("INSERT INTO departamentos SET ?",datos);
            console.log(result);
            res.json({message: "Departaments added"});
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    };


export const methods ={
    getDepartamentos,
    getDepartamento,
    updateDepartamento,
    deletedepartamento,
    addDepartamento
} 