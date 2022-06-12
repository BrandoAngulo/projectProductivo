import express from "express";
import morgan from "morgan";
//importacion de Routes o rutas
import pedidoRoutes from "./routes/pedido.routes";
import usuarioRoutes from "./routes/usuario.routes";
import personaRoutes from "./routes/persona.routes";
import municipioRoutes from "./routes/municipio.routes";
import departamentsRoutes from "./routes/departaments.routes";
import empleadoRoutes from "./routes/empleado.routes";
import clienteRoutes from "./routes/cliente.routes";

const app = express();
//settings
app.set("port", 8000);

//middlwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/pedido", pedidoRoutes); 
app.use("/api/usuario", usuarioRoutes); 
app.use("/api/persona", personaRoutes);
app.use("/api/municipios", municipioRoutes)
app.use("/api/departamentos", departamentsRoutes); 
app.use("/api/empleado",empleadoRoutes);
app.use("/api/cliente", clienteRoutes);

export default app ;
