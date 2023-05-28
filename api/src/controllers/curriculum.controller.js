//Importamos el modelo de datos
import { Curriculum } from '../models';
import { Solicitante } from '../models';


//Definimos los metodos del controlador
export const getCurriculumExists = async (req, res) => {
	try {
		//Aqui debe de ir el ID de la persona que esta logeada en el sistema
		const { id } = req.params;

		const solicitante = await Solicitante.findOne({
			where: { idUsuario: id },
		});

		const curriculum = await Curriculum.findOne({
			where: { idSolic: solicitante.id },
		});

		const infoCV = {
			solicitante, 
			curriculum
		};

		if (curriculum) {
			res.json(infoCV);
		} else {
			res.json(false);
		}

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createCurriculum = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { id } = req.params;

		const solicitante = await Solicitante.findOne({
			where: { idUsuario: id },
		});

		let idSolic = solicitante.id;
		//Se crea una nueva instancia del modelo de datos
		const curriculum = await Curriculum.create({
			idSolic,
		});
		
		curriculum.save();

		const infoCV = {
			solicitante, 
			curriculum
		};
		res.json(infoCV);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};


