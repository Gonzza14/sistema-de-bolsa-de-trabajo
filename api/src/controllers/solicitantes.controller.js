//Importamos el modelo de datos
import { Solicitante } from "../models";

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
