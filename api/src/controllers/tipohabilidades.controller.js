//Importamos el modelo de datos
import { TipoHabilidad } from "../models";

//Definimos los metodos del controlador
export const getTiposhabilidades = async (req, res) => {
  try {
    //Se obtienen todas los tipos de habilidades
    const tipohabilidades = await TipoHabilidad.findAll();

    res.json(tipohabilidades);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createTipohabilidad = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const { nombreTipoHabilidad } = req.body;

    //Se crea una nueva instancia del modelo de datos
    const newTipohabilidad = await TipoHabilidad.create({
        nombreTipoHabilidad
    });

    res.json(newTipohabilidad);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateTipohabilidad = async (req, res) => {
    try {
        // Se obtiene el id del tipo de habilidad a actualizar
        const { id } = req.params;

        // Se actualizar el rol
        const tipohabilidad = await TipoHabilidad.findByPk(id);

        if(!tipohabilidad){
            return res.status(404).json({ message: "Tipo de habilidad no encontrado" });
        }

        tipohabilidad.set(req.body);
        await tipohabilidad.save();
        res.json(tipohabilidad);

    } catch (err){
        return res.status(500).json({ message: err.message });
    }
};

export const deleteTipohabilidad = async (req, res) => {
    try {
    //Se obtiene el tipo de habilidad a eliminar
    const { id } = req.params;

    //Se elimina el tipo de habilidad
    const tipohabilidad = await TipoHabilidad.destroy({
        where: { id },
    });

    if (!tipohabilidad) {
        return res.status(404).json({ message: "Tipo de habilidad no encontrado" });
    }

    res.sendStatus(204);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};

export const getTipohabilidad = async (req, res) => {
    try {
    //Se obtiene el tipo de habilidad
    const { id } = req.params;

    //Se obtiene el tipo de habilidad
    const tipohabilidad = await TipoHabilidad.findByPk(id);

    if (!tipohabilidad) {
        return res.status(404).json({ message: "Tipo de habilidad no encontrado" });
    }

    res.json(tipohabilidad);

    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};

