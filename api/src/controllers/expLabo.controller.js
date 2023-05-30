//Importamos el modelo de datos
import {ExpLabo} from '../models';


//Definimos los metodos del controlador
export const getExpLabos = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const expLabo = await ExpLabo.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(expLabo);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createExpLabo = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { puesto, descPuesto, periodoExpLabo, aniostrab, nombreOrga, contactoOrga } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newExpLabo = await ExpLabo.create({
			idCurriculum,
			puesto, 
			descPuesto, 
			periodoExpLabo, 
			aniostrab, 
			nombreOrga, 
			contactoOrga
		});

		res.json(newExpLabo);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateExpoLabo = async (req, res) => {
	try {
		//Se obtiene el id de la expLabo a actualizar
		const { id } = req.params;

		//Se actualiza la expLabo
		const expLabo = await ExpLabo.findByPk(id);

		if (!expLabo) {
			return res.status(404).json({ message: "Experiencia laboral no encontrado" });
		}

		expLabo.set(req.body);
		await expLabo.save();
		res.json(expLabo);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteExpoLabo = async (req, res) => {
	try {
		//Se obtiene el id de la expLabo a eliminar
		const { id } = req.params;

		//Se elimina la expLabo
		const expLabo = await ExpLabo.destroy({
			where: { id },
		});

		if (!expLabo) {
			return res.status(404).json({ message: "ExpoLabo no encontrada" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

