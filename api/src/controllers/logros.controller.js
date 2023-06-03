//Importamos el modelo de datos
import { Logro } from '../models';


//Definimos los metodos del controlador
export const getLogros = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const logro = await Logro.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(logro);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createLogro = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { logroRealizado, fechaLogro } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newLogro = await Logro.create({
			idCurriculum,
			logroRealizado, fechaLogro
		});

		res.json(newLogro);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateLogro = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const logro = await Logro.findByPk(id);

		if (!logro) {
			return res.status(404).json({ message: "Logro no encontrado" });
		}

		logro.set(req.body);
		await logro.save();
		res.json(logro);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteLogro = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const logro = await Logro.destroy({
			where: { id },
		});

		if (!logro) {
			return res.status(404).json({ message: "Logro no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

