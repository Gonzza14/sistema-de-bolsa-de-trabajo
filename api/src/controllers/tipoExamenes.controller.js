//Importamos el modelo de datos
import { TipoExamen } from "../models";

//Definimos los metodos del controlador
export const getTipoExamenes = async (req, res) => {
  try {
    //Se obtienen todas los tipos examenes
    const tipoExamenes = await TipoExamen.findAll();

    res.json(tipoExamenes);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createTipoExamen = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const { nombreTipoExamen } = req.body;

    //Se crea una nueva instancia del modelo de datos
    const newTipoExamen = await TipoExamen.create({
        nombreTipoExamen
    });

    res.json(newTipoExamen);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateTipoExamen = async (req, res) => {
    try {
        // Se obtiene el id del tipo examen a actualizar
        const { id } = req.params;

        // Se actualizar el rol
        const tipoExamen = await TipoExamen.findByPk(id);

        if(!tipoExamen){
            return res.status(404).json({ message: "Tipo examen no encontrado" });
        }

        tipoExamen.set(req.body);
        await tipoExamen.save();
        res.json(tipoExamen);

    } catch (err){
        return res.status(500).json({ message: err.message });
    }
};

export const deleteTipoExamen = async (req, res) => {
    try {
    //Se obtiene el tipo examen a eliminar
    const { id } = req.params;

    //Se elimina el tipo examen
    const tipoExamen = await TipoExamen.destroy({
        where: { id },
    });

    if (!tipoExamen) {
        return res.status(404).json({ message: "Tipo examen no encontrado" });
    }

    res.sendStatus(204);
    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};

export const getTipoExamen = async (req, res) => {
    try {
    //Se obtiene el tipo examen
    const { id } = req.params;

    //Se obtiene el tipo examen
    const tipoExamen = await TipoExamen.findByPk(id);

    if (!tipoExamen) {
        return res.status(404).json({ message: "Tipo examen no encontrado" });
    }

    res.json(tipoExamen);

    } catch (err) {
    return res.status(500).json({ message: err.message });
    }
};

