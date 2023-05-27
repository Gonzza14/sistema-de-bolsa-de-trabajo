//Importamos el modelo de datos
import { Examen } from '../models';


//Definimos los metodos del controlador
export const getExamens = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const examen = await Examen.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(examen);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createExamen = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { idTipoEx, nombreExamen, archivoExamen, resultadoExamen } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newExamen = await Examen.create({
			idCurriculum,
			idTipoEx, nombreExamen, archivoExamen, resultadoExamen
		});

		res.json(newExamen);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateExamen = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const examen = await Examen.findByPk(id);

		if (!examen) {
			return res.status(404).json({ message: "Examen no encontrado" });
		}

		examen.set(req.body);
		await examen.save();
		res.json(examen);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteExamen = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const examen = await Examen.destroy({
			where: { id },
		});

		if (!examen) {
			return res.status(404).json({ message: "Examen no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

