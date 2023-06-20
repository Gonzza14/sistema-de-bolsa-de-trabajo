import { Seguimiento } from "../models";

export const getSeguimientos = async (req, res) => {
    try {
      //Se obtienen todas las Solicitantes

      const { id } = req.params;

       //Se obtiene la Solicitante
      const seguimiento = await Seguimiento.findAll({
        where: { idSolic: id },
      });
      res.json(seguimiento);

    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  
  export const createSeguimiento = async (req, res) => {
    //Se obtienen los datos del cuerpo de la peticion
    try {
      const { idOferta, idEmpresa, idSolic, contenido} = req.body;
  
      //Se crea una nueva instancia del modelo de datos
      const newSeguimiento = await Seguimiento.create({
        idOferta,
        idEmpresa,
        idSolic,
        contenido,
      });
  
      res.json(newSeguimiento);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };