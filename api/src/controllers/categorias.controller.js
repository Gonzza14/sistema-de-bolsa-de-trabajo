//Importamos el modelo de datos
import { CategoriaOferta } from "../models";

//Definimos los metodos del controlador
export const getCategorias = async (req, res) => {
  try {
    //Se obtienen todas las categorias
    const categorias = await CategoriaOferta.findAll();

    res.json(categorias);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createCategoria = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const { categoriaOfer } = req.body;

    //Se crea una nueva instancia del modelo de datos
    const newcategoria = await CategoriaOferta.create({
      categoriaOfer,
    });

    res.json(newcategoria);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    //Se obtiene el id de la categoria a actualizar
    const { id } = req.params;

    //Se actualiza la categoria
    const categoria = await CategoriaOferta.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: "categoria no encontrada" });
    }

    categoria.set(req.body);
    await categoria.save();
    res.json(categoria);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    //Se obtiene el id de la categoria a eliminar
    const { id } = req.params;

    //Se elimina la categoria
    const categoria = await CategoriaOferta.destroy({
      where: { id },
    });

    if (!categoria) {
      return res.status(404).json({ message: "categoria no encontrada" });
    }

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getCategoria = async (req, res) => {
  try {
    //Se obtiene el id de la categoria a obtener
    const { id } = req.params;

    //Se obtiene la categoria
    const categoria = await CategoriaOferta.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: "categoria no encontrada" });
    }

    res.json(categoria);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
