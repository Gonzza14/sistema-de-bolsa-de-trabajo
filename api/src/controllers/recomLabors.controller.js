//Importamos el modelo de datos
import { RecomLabor } from '../models';


//Definimos los metodos del controlador
export const getRecomLabors = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const recomLa = await RecomLabor.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(recomLa);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createRecomLabor = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { nombreRecomLab, telefonoRecomLab } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newRecomLabor = await RecomLabor.create({
			idCurriculum,
			nombreRecomLab, telefonoRecomLab
		});

		res.json(newRecomLabor);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};//Importamos el modelo de datos
import { Idioma } from '../models';


//Definimos los metodos del controlador
export const getIdiomas = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const idioma = await Idioma.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(idioma);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createIdioma = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { nombreIdioma, puntEscritura, puntLectura, puntConver, puntEscucha } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newIdioma = await Idioma.create({
			idCurriculum,
			nombreIdioma, puntEscritura, puntLectura, puntConver, puntEscucha
		});

		res.json(newIdioma);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateIdioma = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const idioma = await Idioma.findByPk(id);

		if (!idioma) {
			return res.status(404).json({ message: "Idioma no encontrado" });
		}

		idioma.set(req.body);
		await idioma.save();
		res.json(idioma);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteIdioma = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const idioma = await Idioma.destroy({
			where: { id },
		});

		if (!idioma) {
			return res.status(404).json({ message: "Idioma no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};



export const updateRecomLabor = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const recomLa = await RecomLabor.findByPk(id);

		if (!recomLa) {
			return res.status(404).json({ message: "RecomLabor no encontrado" });
		}

		recomLa.set(req.body);
		await recomLa.save();
		res.json(recomLa);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteRecomLabor = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const recomLa = await RecomLabor.destroy({
			where: { id },
		});

		if (!recomLa) {
			return res.status(404).json({ message: "RecomLabor no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

