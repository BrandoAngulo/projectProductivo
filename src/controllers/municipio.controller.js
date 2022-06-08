import { getConnection } from "../database/database";

//LISTAR
const getMunicipios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT M.id_municipio, D.nombre as departamento, M.codigo, M.nombre FROM `municipios` M INNER JOIN departamentos D ON D.id_departamento = M.departamento_id");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//LISTAR 1 DATO
const getMunicipio = async (req, res) => {

try {
    const {idMunicipio} = req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT M.id_municipio, D.nombre as departamento, M.codigo, M.nombre FROM `municipios` M INNER JOIN departamentos D ON D.id_departamento = M.departamento_id WHERE `id_municipio` = ?", idMunicipio);//recibe el parametro id que hemos hecho con la const por parametro 
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updateMunicipio = async (req, res) => {
    const {idMunicipio} = req.params;
    const {departamento_id, codigo, nombre} = req.body;
    if (idMunicipio === undefined || departamento_id === undefined || codigo === undefined || nombre === undefined){
        res.status(400).json({message: "Bad Pequest. please fill all field "});
    }
    try {
        const municipio = {
            departamento_id,
            codigo,
            nombre
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE municipios SET ? WHERE id_municipio = ?", [municipio, idMunicipio]);//el primer ? es por los parametros que se le dan y el segundo para el id que se va a editar 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deleteMunicipio = async (req, res) => {

    try {
        const {idMunicipio}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM municipios WHERE id_municipio = ?", idMunicipio);//recibe el parametro id que hemos hecho con la const por parametro 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addMunicipio = async (req, res) => {
    try {
        //creacion de constantes que tenemos en la db para asi hacer la inserccion de datos a la misma db 
        const {departamento_id, codigo, nombre} = req.body; //con req.body quiere decir que enviamos la peticion por el cuerpo del codigo
        console.log(req.body)
        //condicional si alguno de los campos se envian vacios
        if (departamento_id === undefined || codigo === undefined || nombre === undefined){
            res.status(400).json({message: "Bad Pequest. please fill all field "});
        }
        //creacion de objeto para hacer la inserccion sin necesidad de digitar el query con tantos datos
        const municipio = {
            departamento_id,
            codigo,
            nombre
        };
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO municipios SET ?", municipio);
        res.json({message: "municipio added"});//respuesta cuando se agregue el lenguaje
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exportar la funcion
export const methods = {
    getMunicipios,
    getMunicipio,
    addMunicipio,
    deleteMunicipio,
    updateMunicipio
};