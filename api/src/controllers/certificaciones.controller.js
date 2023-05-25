//Importamos el modelo de datos
import { Certificacion } from '../models';


//Definimos los metodos del controlador
export const getCertificacions = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const certifi = await Certificacion.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(certifi);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createCertificacion = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { nomCertificacion, codCertificacion, instiCertificacion, fechaCertificacion } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newCertificacion = await Certificacion.create({
			idCurriculum,
			nomCertificacion, codCertificacion, instiCertificacion, fechaCertificacion
		});

		res.json(newCertificacion);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateCertificacion = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const certifi = await Certificacion.findByPk(id);

		if (!certifi) {
			return res.status(404).json({ message: "Certificacion no encontrado" });
		}

		certifi.set(req.body);
		await certifi.save();
		res.json(certifi);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteCertificacion = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const certifi = await Certificacion.destroy({
			where: { id },
		});

		if (!certifi) {
			return res.status(404).json({ message: "Certificacion no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

