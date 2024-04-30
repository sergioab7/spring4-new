import { Router } from "express";
import { agregarTarea, eliminarTarea, modificarTarea, mostrarTarea, mostrarTareas } from "../controller/tareas.js";

const router = Router();

router.post("/agregar", agregarTarea)
      .get("/mostrar", mostrarTareas)
      .get("/mostrar/:id", mostrarTarea)
      .delete("/eliminar/:id", eliminarTarea)
      .put("/modificar/:id", modificarTarea);

export default router;
