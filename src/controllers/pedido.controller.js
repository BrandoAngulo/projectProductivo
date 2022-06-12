import { getConnection } from "../database/database";


//LISTAR
const getpedidos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_pedido, codigo_pedido, detalle, cliente, empleado, estado, fechaYhora FROM pedido");
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
    const result = await connection.query("SELECT id_pedido, codigo_pedido, detalle, cliente, empleado, estado, fechaYhora FROM pedido WHERE id_pedido = ?",id_pedido);//recibe el parametro id que hemos hecho con la const por parametro 
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updatePedido = async (req, res) => {
    const {id_pedido} = req.params;
    const {codigo_pedido, detalle, cliente, empleado, estado, fechaYhora} = req.body;
if (id_pedido === undefined, codigo_pedido === undefined || detalle === undefined || cliente === undefined || empleado === undefined || estado === undefined || fechaYhora === undefined ) {
    res.status(400).json({message: "Bad Pequest. please fill all field "});
}
    try {
        const pedido = {id_pedido, codigo_pedido, detalle, cliente, empleado, estado, fechaYhora};
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
        const {codigo_pedido, detalle, cliente, empleado, estado, fechaYhora}=req.body; 
        if (codigo_pedido === undefined || detalle === undefined || cliente === undefined || empleado === undefined || estado === undefined || fechaYhora === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});
        };
        const pedido = {codigo_pedido, detalle, cliente, empleado, estado, fechaYhora};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO pedido SET ?",pedido);
        console.log(result);
        res.json({message: "pedido added"});
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

