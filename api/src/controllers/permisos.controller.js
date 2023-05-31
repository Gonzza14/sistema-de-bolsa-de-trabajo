import { Permiso} from "../models";

export const getPermisos = async (req, res) => {
    try {
        const permisos = await Permiso.findAll();
        res.json(permisos);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const createPermiso = async (req, res) => {
    try {
        // se crea el permiso
        const { nombrePermiso } = req.body;

        const newPermiso = await Permiso.create({
            nombrePermiso
        });

        res.json(newPermiso);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

export const updatePermiso = async (req, res) => {
    try {
        // Se obtiene el id del permiso a actualizar
        const { id } = req.params;

        // Se actualizar el permiso
        const permiso = await Permiso.findByPk(id);

        if(!permiso){
            return res.status(404).json({ message: "Permiso no encontrado" });
        }

        permiso.set(req.body);
        await permiso.save();
        res.json(permiso);

    } catch (err){
        return res.status(500).json({ message: err.message });
    }
};

export const deletePermiso = async (req, res) => {
    try {
    //Se obtiene el id del permiso a eliminar
    const { id } = req.params;

    //Se elimina el permiso
    const permiso = await Permiso.destroy({
        where: { id },
    });

    if (!permiso) {
        return res.status(404).json({ message: "Permiso no encontrado" });
    }

    res.sendStatus(204);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};

export const getPermiso = async (req, res) => {
    try {
    //Se obtiene el id del permiso
    const { id } = req.params;

    //Se obtiene el permiso
    const permiso = await Permiso.findByPk(id);

    if (!permiso) {
        return res.status(404).json({ message: "permiso no encontrado" });
    }

    res.json(permiso);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};