//Importamos el modelo de datos
import { Genero } from "../models";

//Definimos los metodos del controlador
export const getGeneros = async (req, res) => {
  try {
    //Se obtienen todas las Generos
    const generos = await Genero.findAll();

    res.json(generos);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createGenero = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const { nombreGenero } = req.body;

    //Se crea una nueva instancia del modelo de datos
    const newGenero = await Genero.create({
      nombreGenero
    });

    res.json(newGenero);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateGenero = async (req, res) => {
  try {
    //Se obtiene el id de la Genero a actualizar
    const { id } = req.params;

    //Se actualiza la Genero
    const generos = await Genero.findByPk(id);

    if (!generos) {
      return res.status(404).json({ message: "Genero no encontrada" });
    }

    generos.set(req.body);
    await generos.save();
    res.json(Genero);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteGenero = async (req, res) => {
  try {
    //Se obtiene el id de la Genero a eliminar
    const { id } = req.params;

    //Se elimina la Genero
    const genero = await Genero.destroy({
      where: { id },
    });

    if (!genero) {
      return res.status(404).json({ message: "Genero no encontrada" });
    }

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getGenero = async (req, res) => {
  try {
    //Se obtiene el id de la Genero a obtener
    const { id } = req.params;

    //Se obtiene la Genero
    const genero = await Genero.findByPk(id);

    if (!genero) {
      return res.status(404).json({ message: "Genero no encontrada" });
    }

    res.json(genero);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
