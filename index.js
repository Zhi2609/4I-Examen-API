import express from "express";
import alumnosRutas from "../4I-Examen-API/alumnoRouter.js";

const app = express();
const PORT = 3002;

app.use(express.json());

app.use("/alumnos", alumnosRutas);

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});
