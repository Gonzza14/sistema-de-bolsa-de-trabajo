import { Empresa } from "../models";
import { OfertaEmpleo } from "../models";
const db = require("../models/index.js");
const { QueryTypes } = require('sequelize');

export const getOferta = async (req, res) => {
  try {

    const userId =3;
     const empresa = await Empresa.findOne({
      attributes: ['id'],
      where: { idUsuario: userId },
      raw: true,
    });
    console.log(empresa);
     const anuncios = await db.sequelize.query(

        'SELECT a.id, "categoriaOfer", "idCategoriaOfer", "tituloOferta", "fechaExpiracion", "descOferta", "perfilAcademico", habilidades, "expLaboral", "rangoSalar", ubicacion, modalidad, estado, DATE(a."createdAt")AS "createdAt" FROM public."OfertaEmpleos" a INNER JOIN public."CategoriaOferta" b ON a."idCategoriaOfer"  = b.id WHERE a."deletedAt" iS NULL AND "idEmpresa" = :valor ORDER BY  id ASC',
        {
          replacements: {valor: empresa.id},
          type: QueryTypes.SELECT
        }
        
      );
      console.log(anuncios);
     if (anuncios.length > 0) {
      // Mostrar los resultados
      res.json(anuncios);
    }
     else {
     //  No se encontraron resultados
      return res.status(404).json({ message: "No hay datos " });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createOfertaEmpleo = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const { idEmpresa, idCategoriaOfer, tituloOferta, fechaExpiracion, descOferta, perfilAcademico,habilidades,expLaboral,rangoSalar,ubicacion,modalidad,estado } = req.body;

    //Se crea una nueva instancia del modelo de datos
    const newOferta = await OfertaEmpleo.create({
      idEmpresa,
      idCategoriaOfer,
      tituloOferta,
      fechaExpiracion,
      descOferta,
      perfilAcademico,
      habilidades,
      expLaboral,
      rangoSalar,
      ubicacion,
      modalidad,
      estado,
    });

    res.json(newOferta);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateOfertaEmpleo = async (req, res) => {
  try {
    //Se obtiene el id de la oferta a actualizar
    const { id } = req.params;

    //Se actualiza la oferta
    const oferta = await OfertaEmpleo.findByPk(id);

    if (!oferta) {
      return res.status(404).json({ message: "Oferta no encontrada" });
    }

    oferta.set(req.body);
    await oferta.save();
    res.json(oferta);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteOfertaEmpleo= async (req, res) => {
  try {
    //Se obtiene el id de la empresa a eliminar
    const { id } = req.params;

    //Se elimina la empresa
    const oferta = await OfertaEmpleo.destroy({
      where: { id },
    });

    if (!oferta) {
      return res.status(404).json({ message: "Oferta de empleo no encontrada" });
    }

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


