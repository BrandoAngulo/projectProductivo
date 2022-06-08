import express from "express";
import morgan from "morgan";
//importacion de Routes o rutas
import pedidoRoutes from "./routes/pedido.routes";
import usuarioRoutes from "./routes/usuario.routes";
import rolRoutes from "./routes/rol.routes";
import municipioRoutes from "./routes/municipio.routes";
import departamentsRoutes from "./routes/departaments.routes";
import vendedorRoutes from "./routes/vendedor.routes";
const app = express();
//settings
app.set("port", 8000);

//middlwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/pedidos", pedidoRoutes); 
app.use("/api/usuarios", usuarioRoutes); 
app.use("/api/roles", rolRoutes);
app.use("/api/municipios", municipioRoutes)
app.use("/api/departamentos", departamentsRoutes); 
app.use("/api/vendedor",vendedorRoutes);

export default app ;
