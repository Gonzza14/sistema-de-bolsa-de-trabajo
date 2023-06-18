//Importamos el modelo de datos
const db = require("../models/index.js")
import { Solicitante } from "../models";
const { QueryTypes } = require('sequelize');

//Definimos los metodos del controlador
export const getSolicitantes = async (req, res) => {
  try {
    //Se obtienen todas las Solicitantes
    const solicitantes = await Solicitante.findAll();

    res.json(solicitantes);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createSolicitante = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const { idGenero, idUsuario, nombresSolic, apellidosSolic, fechaNacimiento, dui, pasaporte, nit, nup, direcSolic, telefonoSolic, facebook, twitter, linkedin } = req.body;

    //Se crea una nueva instancia del modelo de datos
    const newSolicitante = await Solicitante.create({
      idGenero,
      idUsuario,
      nombresSolic,
      apellidosSolic,
      fechaNacimiento,
      dui,
      pasaporte,
      nit,
      nup,
      direcSolic,
      telefonoSolic,
      facebook,
      twitter,
      linkedin
    });

    res.json(newSolicitante);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateSolicitante = async (req, res) => {
  try {
    //Se obtiene el id de la Solicitante a actualizar
    const { id } = req.params;

    //Se actualiza la Solicitante
    const solicitante = await Solicitante.findByPk(id);

    if (!solicitante) {
      return res.status(404).json({ message: "Solicitante no encontrado" });
    }
		
    solicitante.set(req.body);
    await solicitante.save();
    res.json(solicitante);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteSolicitante = async (req, res) => {
  try {
    //Se obtiene el id de la Solicitante a eliminar
    const { id } = req.params;

    //Se elimina la Solicitante
    const solicitante = await Solicitante.destroy({
      where: { id },
    });

    if (!solicitante) {
      return res.status(404).json({ message: "Solicitante no encontrado" });
    }

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getSolicitante = async (req, res) => {
  try {
    //Se obtiene el id de la Solicitante a obtener
    const { id } = req.params;

    //Se obtiene la Solicitante
    const solicitante = await Solicitante.findByPk(id);

    if (!solicitante) {
      return res.status(404).json({ message: "Solicitante no encontrado" });
    }

    res.json(solicitante);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export const getSolicitantePorUsuario = async (req, res) => {
  try {
  //Se obtiene el id del usuario
  const { idUsuario } = req.params;

  //Se obtiene el rol
  const solicitante = await Solicitante.findOne({
    where: {
      idUsuario: idUsuario,
    }
  });

  if (!solicitante) {
    return res.status(404).json({ message: "Solicitante no encontrado" });
  }

  res.json(solicitante);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

};

export const obtenerPostulantesPostgre = async (req, res) => {
  try {
      // se crea la postulacion
      const { idOferta } = req.params;

      const postulantes = await db.sequelize.query('SELECT sol.id, sol."idGenero", sol."nombresSolic", sol."apellidosSolic", sol."fechaNacimiento", sol.dui, sol.pasaporte, sol.nit, sol.nup, sol."direcSolic", sol."telefonoSolic", sol.facebook, sol.twitter, sol.linkedin FROM "Solicitantes" sol INNER JOIN "Postulas" pos ON sol.id = pos."idSolic" INNER JOIN "OfertaEmpleos" emp ON emp.id = pos."idOferta" WHERE emp.id = ?;', {replacements : [idOferta], type : QueryTypes.RAW});
      res.json(postulantes);
  } catch (e) {
      return res.status(500).json({ message: e.message });
  }
};
