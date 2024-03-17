import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 60,
    },
});

const Tarea = mongoose.model("Tarea", tareaSchema);

export default Tarea;
