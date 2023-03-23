//Importamos el modelo de datos
import { Perfil } from "../models/Perfil";

//Definimos los metodos del controlador
export const getPerfiles = async (req, res) => {
  try {
    //Se obtienen todas las empresas
    const perfiles = await Perfil.findAll();
    res.json(perfiles);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const createPerfil = async (req, res) => {
  try {
    //Se obtienen los datos del cuerpo de la peticion
    const { descripcion, id_empresa } = req.body;
    //Se crea una nueva instancia del modelo de datos
    const newPerfil = await Perfil.create({
      descripcion,
      id_empresa,
    });
    res.json(newPerfil);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const updatePerfil = async (req, res) => {
  try {
    const { id } = req.params;
    //Se obtienen los datos del cuerpo de la peticion
    const perfil = await Perfil.findByPk(id);

    if (!perfil) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }

    //Se actualiza el perfil
    perfil.set(req.body);
    await perfil.save();
    res.json(perfil);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deletePerfil = async (req, res) => {
  try {
    const { id } = req.params;
    //Se elimina el perfil por su id
    const perfil = await Perfil.destroy({
      where: { id },
    });

    if (!perfil) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const getPerfil = async (req, res) => {
  try {
    const { id } = req.params;
    //Se obtiene el perfil por su id
    const perfil = await Perfil.findByPk(id);

    if (!perfil) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }

    res.json(perfil);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
