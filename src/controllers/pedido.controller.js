import { getConnection } from "../database/database";


//LISTAR
const getpedidos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT p.id_pedido, p.codigo_pedido, c.id_cliente, u.nombre cliente, e.proceso FROM pedido p INNER join estadopedido e on p.id_estado = e.id_estado INNER join cliente c on p.id_cliente = c.id_cliente INNER JOIN usuario u on c.id_user = u.id_usuario");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//LISTAR 1 DATO
const getpedido = async (req, res) => {

try {
    console.log(req.params);
    const {id_pedido}=req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT p.id_pedido, p.codigo_pedido, c.id_cliente, u.nombre cliente, e.proceso FROM pedido p INNER join estadopedido e on p.id_estado = e.id_estado INNER join cliente c on p.id_cliente = c.id_cliente INNER JOIN usuario u on c.id_user = u.id_usuario WHERE p.id_pedido = ?",id_pedido);//recibe el parametro id que hemos hecho con la const por parametro 
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updatePedido = async (req, res) => {
    const {id_pedido} = req.params;
    const {codigo_pedido, id_cliente,id_estado} = req.body;
if (id_pedido === undefined, codigo_pedido === undefined || id_cliente === undefined || id_estado === undefined ) {
    res.status(400).json({message: "Bad Pequest. please fill all field "});
}
    try {
        const pedido = {id_pedido, codigo_pedido, id_cliente, id_estado};
        console.log(req.params);
        const connection = await getConnection();
        const result = await connection.query("UPDATE pedido SET ? WHERE id_pedido = ?",[pedido,id_pedido]);//el primer ? es por los parametros que se le dan y el segundo para el id que se va a editar 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deletePedido = async (req, res) => {

    try {
        console.log(req.params);
        const {id_pedido}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM pedido WHERE id_pedido = ?",id_pedido);//recibe el parametro id que hemos hecho con la const por parametro 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addPedido = async (req, res) => {
    try {
        //creacion de constantes que tenemos en la db para asi hacer la inserccion de datos a la misma db 
        const {codigo_pedido, id_cliente, id_estado}=req.body; //con req.body quiere decir que enviamos la peticion por el cuerpo del codigo
        //condicional si alguno de los campos se envian vacios
        if (codigo_pedido === undefined || id_cliente === undefined || id_estado === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});//solicitud mala. porfavor rellene todas los campos
        }
        //creacion de objeto para hacer la inserccion sin necesidad de digitar el query con tantos datos
        const pedido = {codigo_pedido, id_cliente, id_estado};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO pedido SET ?",pedido);
        console.log(result);
        res.json({message: "pedido added"});//respuesta cuando se agregue el lenguaje
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exportar la funcion
export const methods = {
    getpedidos,
    getpedido,
    addPedido,
    deletePedido,
    updatePedido
};

