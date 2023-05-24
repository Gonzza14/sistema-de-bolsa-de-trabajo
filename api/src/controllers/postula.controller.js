import { Postula } from "../models";

export const getPostulas = async (req, res) => {
    try {
        const postulas = await Postula.findAll({attributes: ["idOferta", "idSolic"]});
        res.json(postulas);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const createPostula = async (req, res) => {
    try {
        // se crea la postulacion
        const { idOferta, idSolic } = req.body;

        const newPostula = await Postula.create({
            idOferta,
            idSolic
        });

        res.json(newPostula);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

export const updatePostula = async (req, res) => {
    try {
        // Se obtiene el id de la postulacion a actualizar
        const { idOferta } = req.params;

        // Se actualizar el rol
        const postula = await Postula.findByPk(idOferta);

        if(!postula){
            return res.status(404).json({ message: "Postulacion no encontrada" });
        }

        postula.set(req.body);
        await postula.save();
        res.json(postula);

    } catch (err){
        return res.status(500).json({ message: err.message });
    }
};

export const deletePostula = async (req, res) => {
    try {
    //Se obtiene el id de la postulacion a eliminar
    const { idOferta } = req.params;
    const { idSolic } = req.params;

    //Se elimina el rol
    const postula = await Postula.destroy({
        where: {
            idOferta: idOferta,
            idSolic: idSolic
        }
    });

    if (!postula) {
        return res.status(404).json({ message: "Postulacion no encontrada" });
    }

    res.sendStatus(204);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};

export const getPostula = async (req, res) => {
    try {
    //Se obtiene el id de la postulacion
    const { idOferta } = req.params;
    const { idSolic } = req.params;

    //Se obtiene el rol
    const postula = await Postula.findAll({
        attributes: ["idOferta", "idSolic"],
        where: {
            idOferta: idOferta,
            idSolic: idSolic
        }
});

    if (!postula) {
        return res.status(404).json({ message: "Postulacion no encontrada" });
    }

    res.json(postula);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};