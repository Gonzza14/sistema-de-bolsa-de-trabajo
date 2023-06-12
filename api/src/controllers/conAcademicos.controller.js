//Importamos el modelo de datos
import { ConAcademico } from '../models';


//Definimos los metodos del controlador
export const getConAcademicos = async (req, res) => {
	try {
		//Se obtienen todas las ConAcademicos
		const { idCurriculum } = req.params;
		const ConAcademicos = await ConAcademico.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(ConAcademicos);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createConAcademico = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const {nomInstitucion, nombreCurso, periodoConAcad } = req.body;
		const {idCurriculum} = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newConAcademico = await ConAcademico.create({
			idCurriculum,
			nomInstitucion, 
			nombreCurso, 
			periodoConAcad
		});

		res.json(newConAcademico);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateConAcademico = async (req, res) => {
	try {
		//Se obtiene el id de la conAcademico a actualizar
		const { id } = req.params;

		//Se actualiza la conAcademico
		const conAcademico = await ConAcademico.findByPk(id);

		if (!conAcademico) {
			return res.status(404).json({ message: "Conocimiento academino no encontrado" });
		}

		conAcademico.set(req.body);
		await conAcademico.save();
		res.json(conAcademico);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteConAcademico = async (req, res) => {
	try {
		//Se obtiene el id de la conAcademico a eliminar
		const { id } = req.params;

		//Se elimina la conAcademico
		const conAcademico = await ConAcademico.destroy({
			where: { id },
		});

		if (!conAcademico) {
			return res.status(404).json({ message: "ConAcademico no encontrada" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const getConAcademico = async (req, res) => {
	try {
		//Se obtiene el id de la conAcademico a obtener
		const { id } = req.params;

		//Se obtiene la conAcademico
		const conAcademico = await ConAcademico.findByPk(id);

		if (!conAcademico) {
			return res.status(404).json({ message: "ConAcademico no encontrada" });
		}

		res.json(conAcademico);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

/*export const getPerfilesPorConAcademico = async (req, res) => {
	try {
		//Se obtiene el id de la conAcademico a obtener
		const { id } = req.params;
		//Se obtienen los perfiles de la conAcademico
		const perfil = await Perfil.findAll({
			where: { idConAcademico: id },
		});

		//Se verifica si se encontraron perfiles
		if (perfil.length == 0) {
			return res.status(404).json({ message: "No se encontraron perfiles" });
		}

		res.json(perfil);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};*/
