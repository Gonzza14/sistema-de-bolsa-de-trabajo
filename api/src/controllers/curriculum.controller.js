//Importamos el modelo de datos
import { Curriculum } from '../models';


//Definimos los metodos del controlador
export const getCurriculumExists = async (req, res) => {
	try {
		//Se obtiene el id de la conAcademico a obtener
		const id = 1;
		//Se obtiene la conAcademico
		const curriculum = await Curriculum.findOne({
			where: { idSolic: id },
		});
		
		if (curriculum) {
			// si el registro existe, devuelve true
			res.json(curriculum);
		} else {
			// si el registro no existe, devuelve false
			res.json(false);
		}
		
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createCurriculum = async (req, res) => {
  //Se obtienen los datos del cuerpo de la peticion
  try {
    const idSolic = 1;
		console.log(req.body)
    //Se crea una nueva instancia del modelo de datos
    const newCurriculum = await Curriculum.create({
      idSolic,
    });

    res.json(newCurriculum);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


