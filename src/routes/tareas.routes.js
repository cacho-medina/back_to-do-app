import { Router } from "express";
import {
    crearTarea,
    deleteTareaById,
    editTarea,
    getTareaById,
    getTareas,
} from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/tareas").get(getTareas).post(crearTarea);

router
    .route("/tareas/:id")
    .get(getTareaById)
    .delete(deleteTareaById)
    .put(editTarea);

export default router;
