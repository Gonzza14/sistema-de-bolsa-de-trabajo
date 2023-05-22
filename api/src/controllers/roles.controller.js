import { Rol } from "../models";

export const getRoles = async (req, res) => {
    try {
        const rols = await Rol.findAll();
        res.json(rols);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const createRol = async (req, res) => {
    try {
        // se crea el rol
        const { nombreRol } = req.body;

        const newRol = await Rol.create({
            nombreRol
        });

        res.json(newRol);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

export const updateRol = async (req, res) => {
    try {
        // Se obtiene el id del rol a actualizar
        const { id } = req.params;

        // Se actualizar el rol
        const rol = await Rol.findByPk(id);

        if(!rol){
            return res.status(404).json({ message: "Rol no encontrado" });
        }

        rol.set(req.body);
        await rol.save();
        res.json(rol);

    } catch (err){
        return res.status(500).json({ message: err.message });
    }
};

export const deleteRol = async (req, res) => {
    try {
    //Se obtiene el id del rol a eliminar
    const { id } = req.params;

    //Se elimina el rol
    const rol = await Rol.destroy({
        where: { id },
    });

    if (!rol) {
        return res.status(404).json({ message: "Rol no encontrado" });
    }

    res.sendStatus(204);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};

export const getRol = async (req, res) => {
    try {
    //Se obtiene el id del rol
    const { id } = req.params;

    //Se obtiene el rol
    const rol = await Rol.findByPk(id);

    if (!rol) {
        return res.status(404).json({ message: "rol no encontrado" });
    }

    res.json(rol);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};