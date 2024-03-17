import Tarea from "../database/model/tarea.js";

export const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        if (req.query.nombre) {
            const tarea = tareas.filter((task) =>
                task.nombre.includes(req.query.nombre)
            );
            if (tarea.length >= 1) {
                res.status(200).json(tarea);
            } else {
                res.status(404).json({ message: "Tarea no encontrada" });
            }
        } else {
            res.status(200).json(tareas);
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error al obtener las tareas" });
    }
};
export const getTareaById = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        res.status(200).json(tarea);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "Error al obtener la tarea requerida",
        });
    }
};
export const crearTarea = async (req, res) => {
    try {
        const nueva = new Tarea(req.body);
        const tarea = await nueva.save();
        res.status(201).json({ message: "Tarea creada con exito" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "No se pudo guardar la tarea" });
    }
};
export const deleteTareaById = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            res.status(404).json({
                message: "No se encontro la tarea requerida",
            });
        }
        const eliminada = await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tarea eliminada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "La tarea no pudo ser eliminada" });
    }
};
export const editTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            res.status(404).json({
                message: "No se encontro la tarea requerida",
            });
        }
        const tareaNueva = await Tarea.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json({ message: "Tarea modificada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al modificar la tarea" });
    }
};
