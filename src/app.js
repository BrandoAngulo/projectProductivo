import express from "express";
import morgan from "morgan";
//importacion de Routes o rutas
import pedidoRoutes from "./routes/pedido.routes";
import usuarioRoutes from "./routes/usuario.routes";

import departamentsRoutes from "./routes/departaments.routes";

const app = express();
//settings
app.set("port", 8000);

//middlwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/pedidos", pedidoRoutes); 
app.use("/api/usuarios", usuarioRoutes); 

app.use("/api/departamentos", departamentsRoutes); 

export default app ;
