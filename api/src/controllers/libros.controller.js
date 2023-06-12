//Importamos el modelo de datos
import { Libro } from '../models';


//Definimos los metodos del controlador
export const getLibros = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const libro = await Libro.findAll({
			where: { idCurriculum: idCurriculum },
		});
		res.json(libro);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createLibro = async (req, res) => {
	//Se obtienen los datos del cuerpo de la peticion
	try {
		const { nombreLibro,lugarLibro,fechaPub,edicionLibro,isbn } = req.body;
		const { idCurriculum } = req.params;
		//Se crea una nueva instancia del modelo de datos
		const newLibro = await Libro.create({
			idCurriculum,
			nombreLibro,lugarLibro,fechaPub,edicionLibro,isbn
		});

		res.json(newLibro);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateLibro = async (req, res) => {
	try {
		//Se obtiene el id  actualizar
		const { id } = req.params;

		//Se actualiza
		const libro = await Libro.findByPk(id);

		if (!libro) {
			return res.status(404).json({ message: "Libro no encontrado" });
		}

		libro.set(req.body);
		await libro.save();
		res.json(libro);

	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteLibro = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const libro = await Libro.destroy({
			where: { id },
		});

		if (!libro) {
			return res.status(404).json({ message: "Libro no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

