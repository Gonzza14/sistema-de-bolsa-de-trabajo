//Importamos el modelo de datos
import { Examen, TipoExamen } from '../models';


//Definimos los metodos del controlador
export const getExamens = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const examen = await Examen.findAll({
			where: { idCurriculum: idCurriculum },
			include: [{
				model: TipoExamen,
				attributes: ['id', 'nombreTipoExamen']
			}]
		});
		res.json(examen);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createExamen = async (req, res) => {
  try {
		const data = JSON.parse(req.body.data);
	const { idTipoEx, nombreExamen, resultadoExamen } = data;
    const { idCurriculum } = req.params;
    const archivoExamen = req.file.filename;
    const newExamen = await Examen.create({
      idCurriculum,
      idTipoEx,
      nombreExamen,
      archivoExamen,
      resultadoExamen
    });

    const examen = await Examen.findOne({
      where: { id: newExamen.id },
      include: [{
        model: TipoExamen,
        attributes: ['id', 'nombreTipoExamen']
      }]
    });

    res.json(examen);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};


export const updateExamen = async (req, res) => {
  try {
    // Get the id to update
    const { id } = req.params;
		const { idCurriculum } = req.params;

    // Parse the data from the request body
    const data = JSON.parse(req.body.data);
    const { idTipoEx, nombreExamen, resultadoExamen } = data;
    const archivoExamen = req.file ? req.file.filename : undefined;

    // Update the exam
    const examen = await Examen.findByPk(id);


    if (!examen) {
      return res.status(404).json({ message: "Examen no encontrado" });
    }

    examen.set({
      idTipoEx,
      nombreExamen,
      resultadoExamen,
      ...(archivoExamen && { archivoExamen })
    });
    await examen.save();

		const examenActualizado = await Examen.findAll({
			where: { idCurriculum: idCurriculum },
      include: [{
        model: TipoExamen,
        attributes: ['id', 'nombreTipoExamen']
      }]
    });

    res.json(examenActualizado);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};



export const deleteExamen = async (req, res) => {
	try {
		//Se obtiene el id a eliminar
		const { id } = req.params;

		//Se elimina 
		const examen = await Examen.destroy({
			where: { id },
		});

		if (!examen) {
			return res.status(404).json({ message: "Examen no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

