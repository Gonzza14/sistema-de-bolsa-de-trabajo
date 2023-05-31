import { RolPermiso, Rol, Permiso } from "../models";
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

export const getRolPermisos = async (req, res) => {
	try {
		const roles = await Rol.findAll();


		const rolPermisos = await RolPermiso.findAll({
			attributes: ['idRol', [Sequelize.fn('array_agg', Sequelize.col('idPermiso')), 'idPermiso']],
			group: ['idRol', 'Rol.id'],
			include: [{
				model: Rol,
				attributes: ['nombreRol']
			}],
		});

		const resultado = roles.reduce((acc, role) => {
			const rolPermiso = rolPermisos.find(rp => rp.idRol === role.id);
			if (rolPermiso) {
				acc.push(rolPermiso);
			} else {
				acc.push({
					"idRol": role.id,
					"idPermiso": [],
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



// export const getRolPermisos = async (req, res) => {
//   try {

// 		const roles = await Rol.findAll();

//     const rolPermisos = await RolPermiso.findAll({
//       attributes: ['idRol', [Sequelize.fn('array_agg', Sequelize.col('idPermiso')), 'idPermiso']],
//       group: ['idRol', 'Rol.id'],
//       include: [{
//         model: Rol,
//         attributes: ['nombreRol']
//       }],
//     }
// 		);



//     res.json(rolPermisos);
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// };


// export const createRolPermiso = async (req, res) => {
// 	try {
// 		const { idRol } = req.params;
// 		const { idPermiso } = req.body;
// 		const newRolPermisos = [];

// 		for (const permiso of idPermiso) {
// 			const existingRolPermiso = await RolPermiso.findOne({
// 				where: {
// 					idRol,
// 					idPermiso: permiso
// 				}
// 			});

// 			if (!existingRolPermiso) {
// 				const newRolPermiso = await RolPermiso.create({
// 					idRol,
// 					idPermiso: permiso
// 				});
// 				newRolPermisos.push(newRolPermiso);
// 			}
// 		}

// 		// Obtener los nombres de los roles y permisos
// 		const rolPermisosConNombres = await RolPermiso.findAll({
// 			where: {
// 				idRol
// 			},
// 			include: [
// 				{
// 					model: Rol,
// 					attributes: ['nombreRol']
// 				},
// 				{
// 					model: Permiso,
// 					attributes: ['nombrePermiso']
// 				}
// 			]
// 		});

// 		res.json(rolPermisosConNombres);
// 	} catch (e) {
// 		return res.status(500).json({ message: e.message });
// 	}
// };


export const updateRolPermiso = async (req, res) => {
	try {
		const {idRol,  idPermiso } = req.body;

console.log(idRol)
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
			attributes: ['idRol', [Sequelize.fn('array_agg', Sequelize.col('idPermiso')), 'idPermiso']],
			group: ['idRol', 'Rol.id'],
			include: [{ model: Rol, attributes: ['nombreRol'] }],
			where: { idRol: idRol }
		});


		res.json(rolPermisos)
		// return getRolPermisos(req, res);

	} catch (e) {
		return res.status(400).json({ message: e.message });
	}
};


