import express from "express";
import morgan from "morgan";
//importacion de Routes o rutas
import pedidoRoutes from "./routes/pedido.routes";
import usuarioRoutes from "./routes/usuario.routes";
//import bcryptjs para el hash de password
import bcrypt from "bcryptjs/dist/bcrypt";

const app = express();
//settings
app.set("port", 3000);

//middlwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/pedidos", pedidoRoutes); 
app.use("/api/usuarios", usuarioRoutes); 

export default app;
