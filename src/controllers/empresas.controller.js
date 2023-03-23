//Importamos el modelo de datos
import { Empresa } from "../models/Empresa";

//Definimos los metodos del controlador
export const getEmpresas = async (req, res) => {
  //Se obtienen todas las empresas
  const empresas = await Empresa.findAll();

  res.json({ empresas });
};

export const createEmpresa = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  const { nombre, descripcion } = req.body;

  //Se crea una nueva instancia del modelo de datos
  const newEmpresa = await Empresa.create({
    nombre,
    descripcion,
  });

  //Se imprime la empresa creada
  console.log(newEmpresa);

  res.json({ message: "Empresa creada" });
};
