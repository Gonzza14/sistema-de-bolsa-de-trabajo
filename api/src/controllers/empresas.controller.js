//Importamos el modelo de datos
import { Empresa } from "../models";

//Definimos los metodos del controlador
export const getEmpresas = async (req, res) => {
  try {
    //Se obtienen todas las empresas
    const empresas = await Empresa.findAll();

    res.json(empresas);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createEmpresa = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const { idUsuario, nombreEmpresa, telefonoEmpresa, correoEmpresa, direcEmpresa } = req.body;

    //Se crea una nueva instancia del modelo de datos
    const newEmpresa = await Empresa.create({
      idUsuario,
      nombreEmpresa,
      telefonoEmpresa,
      correoEmpresa,
      direcEmpresa,
    });

    res.json(newEmpresa);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateEmpresa = async (req, res) => {
  try {
    //Se obtiene el id de la empresa a actualizar
    const { id } = req.params;

    //Se actualiza la empresa
    const empresa = await Empresa.findByPk(id);

    if (!empresa) {
      return res.status(404).json({ message: "Empresa no encontrada" });
    }

    empresa.set(req.body);
    await empresa.save();
    res.json(empresa);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteEmpresa = async (req, res) => {
  try {
    //Se obtiene el id de la empresa a eliminar
    const { id } = req.params;

    //Se elimina la empresa
    const empresa = await Empresa.destroy({
      where: { id },
    });

    if (!empresa) {
      return res.status(404).json({ message: "Empresa no encontrada" });
    }

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getEmpresa = async (req, res) => {
  try {
    //Se obtiene el id de la empresa a obtener
    const { id } = req.params;

    //Se obtiene la empresa
    const empresa = await Empresa.findByPk(id);

    if (!empresa) {
      return res.status(404).json({ message: "Empresa no encontrada" });
    }

    res.json(empresa);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getPerfilesPorEmpresa = async (req, res) => {
  try {
    //Se obtiene el id de la empresa a obtener
    
    const empresa = await Empresa.findOne({
      attributes: ['id'],
      where: { idUsuario: userId },
      raw: true,
    });
    const { id } = req.params;
    //Se obtienen los perfiles de la empresa
    const perfil = await Perfil.findAll({
      where: { idEmpresa: id },
    });

    //Se verifica si se encontraron perfiles
    if (perfil.length == 0) {
      return res.status(404).json({ message: "No se encontraron perfiles" });
    }

    res.json(perfil);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
