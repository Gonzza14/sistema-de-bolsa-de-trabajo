//Importamos el modelo de datos
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
		const idioma = await Idioma.findAll({ where: { idCurriculum: idCurriculum }, });
		if (idioma.some(i => i.nombreIdioma === nombreIdioma)) {
			return res.status(400).json({ message: "Ya existe"});
		} else {
				// create new instance of Idioma
				const newIdioma = await Idioma.create({ idCurriculum, nombreIdioma, puntEscritura, puntLectura, puntConver, puntEscucha });
				res.json(newIdioma);
		}
		
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateIdioma = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;
		const { idCurriculum } = req.params;

		//Se actualiza
		const idioma = await Idioma.findByPk(id);

		if (!idioma) {
			return res.status(404).json({ message: "Idioma no encontrado" });
		}

		const idiomaPut = await Idioma.findAll({ where: { idCurriculum: idCurriculum }, });
		if (idiomaPut.some(i => i.nombreIdioma === req.body.nombreIdioma)) {
			return res.status(400).json({ message: "Ya existe"});
		} else {
			idioma.set(req.body);
			await idioma.save();
			res.json(idioma);
		}
	
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

