//Importamos el modelo de datos
import {HabilidadTecnica} from '../models';


//Definimos los metodos del controlador
export const getHabilidadTecnicas = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const habilidadTecnicas = await HabilidadTecnica.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(habilidadTecnicas);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createHabilidadTecnica = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { idTipoHab, habTec  } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newHabilidadTecnica = await HabilidadTecnica.create({
			idCurriculum,
			idTipoHab, habTec 
		});

		res.json(newHabilidadTecnica);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateHabilidadTecnica = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const habilidadTecnica = await HabilidadTecnica.findByPk(id);

		if (!habilidadTecnica) {
			return res.status(404).json({ message: "Habilidad tecnica no encontrado" });
		}

		habilidadTecnica.set(req.body);
		await habilidadTecnica.save();
		res.json(habilidadTecnica);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteHabilidadTecnica = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const habilidadTecnica = await HabilidadTecnica.destroy({
			where: { id },
		});

		if (!habilidadTecnica) {
			return res.status(404).json({ message: "Habilidad tecnica no encontrada" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

