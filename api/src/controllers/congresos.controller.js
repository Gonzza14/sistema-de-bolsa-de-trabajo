//Importamos el modelo de datos
import { Congreso } from '../models';


//Definimos los metodos del controlador
export const getCongresos = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const congreso = await Congreso.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(congreso);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createCongreso = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { lugarCongreso, paisCongreso, antiCongreso, fechaCongreso } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newCongreso = await Congreso.create({
			idCurriculum,
			lugarCongreso, paisCongreso, antiCongreso, fechaCongreso
		});

		res.json(newCongreso);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateCongreso = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const congreso = await Congreso.findByPk(id);

		if (!congreso) {
			return res.status(404).json({ message: "Congreso no encontrado" });
		}

		congreso.set(req.body);
		await congreso.save();
		res.json(congreso);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteCongreso = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const congreso = await Congreso.destroy({
			where: { id },
		});

		if (!congreso) {
			return res.status(404).json({ message: "Congreso no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

