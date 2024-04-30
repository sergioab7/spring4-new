import { tareas } from "../data/tareas.js";

export const agregarTarea = async(req,res) => {
    const tarea = req.body.tarea;
    const tareaUsuario = {
        id:new Date().getTime(),
        tarea,
        done:false
    }
    tareas.push(tareaUsuario);
    res.json({
        tareas
    })
}

export const mostrarTareas = async(req,res) => {
    res.json({
        tareas
    })
}

export const mostrarTarea = async(req,res) => {
    const id = req.params.id;
    
    const existeID = tareas.find(tarea => tarea.id==id);
    if(!existeID){
        return res.status(400).json({
            status:"Error",
            message:"[-] No existe el ID."
        })
    }

    return res.status(200).json({
        status:"Success",
        tarea:existeID
    })
}

export const eliminarTarea = async(req,res) => {
    const id = req.params.id;
    
    const existeID = tareas.findIndex(tarea => tarea.id==id);
    if(!existeID){
        return res.status(400).json({
            status:"Error",
            message:"[-] No existe el ID."
        })
    }

    tareas.splice(existeID, 1);

    return res.status(200).json({
        status:"Success",
        message:"Tarea eliminada"
    })

}

export const modificarTarea = async(req,res) => {
    const id = req.params.id;
    
    const existeID = tareas.findIndex(tarea => tarea.id==id);
    if(existeID === -1){
        return res.status(400).json({
            status:"Error",
            message:"[-] No existe el ID."
        })
    }

    tareas[existeID].done = !tareas[existeID].done; 


    return res.status(200).json({
        status:"Success",
        message:"Estado cambiado"
    })

}