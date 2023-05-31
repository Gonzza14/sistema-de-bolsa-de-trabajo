import { RolPermiso, Rol, Permiso } from "../models";
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

export const getRolPermisos = async (req, res) => {
	try {
		const roles = await Rol.findAll();

		const rolPermisos = await RolPermiso.findAll({
			attributes: [
				'idRol',
				[Sequelize.fn('array_agg', Sequelize.col('idPermiso')), 'idPermiso'],
				[Sequelize.literal(`array_agg("Permiso"."nombrePermiso")`), 'nombrePermisos']
			],
			group: ['idRol', 'Rol.id'],
			include: [
				{
					model: Rol,
					attributes: ['nombreRol']
				},
				{
					model: Permiso,
					attributes: []
				}
			],
		});


		const resultado = roles.reduce((acc, role) => {
			const rolPermiso = rolPermisos.find(rp => rp.idRol === role.id);
			if (rolPermiso) {
				acc.push(rolPermiso);
			} else {
				acc.push({
					"idRol": role.id,
					"idPermiso": [],
					"nombrePermisos": [
						],
					"Rol": {
						"nombreRol": role.nombreRol
					}
				});
			}
			return acc;
		}, []);
		res.json(resultado);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};



export const updateRolPermiso = async (req, res) => {
	try {
		const { idRol, idPermiso } = req.body;

		// Eliminar permisos que ya no están en el arreglo de idPermiso
		await RolPermiso.destroy({
			where: {
				idRol,
				idPermiso: {
					[Op.notIn]: idPermiso
				}
			}
		});

		// Agregar nuevos permisos
		for (const permiso of idPermiso) {
			const existingRolPermiso = await RolPermiso.findOne({
				where: {
					idRol,
					idPermiso: permiso
				}
			});

			if (!existingRolPermiso) {
				await RolPermiso.create({
					idRol,
					idPermiso: permiso
				});
			}
		}

		const rolPermisos = await RolPermiso.findAll({
			attributes: [
				'idRol',
				[Sequelize.fn('array_agg', Sequelize.col('idPermiso')), 'idPermiso'],
				[Sequelize.literal(`array_agg("Permiso"."nombrePermiso")`), 'nombrePermisos']
			],
			group: ['idRol', 'Rol.id'],
			include: [
				{
					model: Rol,
					attributes: ['nombreRol']
				},
				{
					model: Permiso,
					attributes: []
				}
			],
		});


		res.json(rolPermisos)

	} catch (e) {
		return res.status(400).json({ message: e.message });
	}
};


