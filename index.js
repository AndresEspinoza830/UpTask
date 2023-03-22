import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json()); //Antes se usaba bodyparser

//Variables de Ambiente
dotenv.config(); //va a buscar el archivo .env

//Conexion a mongoDB
conectarDB();

//Routing
app.use("/api/usuarios", usuarioRoutes); //Primer parametro es como inicia la ruta y el segundo las rutas que sigue

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
