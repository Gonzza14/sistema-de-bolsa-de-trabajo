//Importamos el modelo de datos
import {HabilidadTecnica , TipoHabilidad} from '../models';


//Definimos los metodos del controlador
export const getHabilidadTecnicas = async (req, res) => {
	try {
		//Se obtienen todas las ExpoLabo
		const { idCurriculum } = req.params;
		const habilidadTecnicas = await HabilidadTecnica.findAll({
			where: { idCurriculum: idCurriculum },
			include: [{
        model: TipoHabilidad,
        attributes: ['id', 'nombreTipoHabilidad']
      }]
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
		
		const habilidadTecnica = await HabilidadTecnica.findOne({
      where: { id: newHabilidadTecnica.id },
      include: [{
        model: TipoHabilidad,
        attributes: ['id', 'nombreTipoHabilidad']
      }]
    });
    
		res.json(habilidadTecnica);
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

		const habilidadTecnicaAct = await habilidadTecnica.set(
			{
				idTipoHab : req.body.idTipoHab, 
				habTec : req.body.habTec,
			}
		);
		await habilidadTecnicaAct.save();

		const habilidadTecnicaPut = await HabilidadTecnica.findOne({
      where: { id: habilidadTecnicaAct.id },
      include: [{
        model: TipoHabilidad,
        attributes: ['id', 'nombreTipoHabilidad']
      }]
    });
		console.log(habilidadTecnicaPut);


		res.json(habilidadTecnicaPut);

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

