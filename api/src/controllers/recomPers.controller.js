//Importamos el modelo de datos
import { RecomPers } from '../models';


//Definimos los metodos del controlador
export const getRecomPerss = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const recomPer = await RecomPers.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(recomPer);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createRecomPers = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { nombreRecomPers, telefonoRecomPers} = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newRecomPers = await RecomPers.create({
			idCurriculum,
			nombreRecomPers, telefonoRecomPers
		});

		res.json(newRecomPers);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateRecomPers = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const recomPer = await RecomPers.findByPk(id);

		if (!recomPer) {
			return res.status(404).json({ message: "RecomPers no encontrado" });
		}

		recomPer.set(req.body);
		await recomPer.save();
		res.json(recomPer);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteRecomPers = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const recomPer = await RecomPers.destroy({
			where: { id },
		});

		if (!recomPer) {
			return res.status(404).json({ message: "RecomPers no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

