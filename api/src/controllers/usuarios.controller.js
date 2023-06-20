import { Usuario, Rol, Solicitante, Genero, Empresa } from "../models";
const bcrypt = require("bcryptjs");

export const getUsuarios = async (req, res) => {
	try {
		const usuarios = await Usuario.findAll({
			include: [
				{
					model: Rol,
					attributes: ["id", "nombreRol"],
				},
			],
		});
		res.json(usuarios);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createUsuario = async (req, res) => {
	try {
		//Se crea la empresa
		const { idRol, correoUsuario, contrasena } = req.body;

		if (!correoUsuario || !contrasena) {
			return res.status(400).json({ message: "Faltan campos por llenar" });
		}

		const rondas = 10;
		const passEncriptada = await bcrypt.hash(contrasena, rondas);

		const newUsuario = await Usuario.create({
			idRol,
			correoUsuario,
			contrasena: passEncriptada,
		});

		const usuario = await Usuario.findOne({
			where: { id: newUsuario.id },
			include: [
				{
					model: Rol,
					attributes: ["id", "nombreRol"],
				},
			],
		});

		res.json(usuario);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateUsuario = async (req, res) => {
	try {
		const { id } = req.params;

		//Se actualiza la usuario
		const usuario = await Usuario.findByPk(id);

		if (!usuario) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}

		/*if (!req.body.correoUsuario || !req.body.contrasena) {
				return res.status(400).json({ message: "Faltan campos por llenar" });
		}*/

		let passEncriptada = null;
		const rondas = 10;

		console.log(req.body);

		if (req.body.contrasena) {
			passEncriptada = await bcrypt.hash(req.body.contrasena, rondas);
		}

		const putUsuario = await usuario.set({
			idRol: req.body.idRol,
			correoUsuario: req.body.correoUsuario,
			contrasena: passEncriptada || usuario.contrasena,
		});
		await putUsuario.save();

		const usuarioCambiado = await Usuario.findOne({
			where: { id: putUsuario.id },
			include: [
				{
					model: Rol,
					attributes: ["id", "nombreRol"],
				},
			],
		});

		res.json(usuarioCambiado);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteUsuario = async (req, res) => {
	try {
		//Se obtiene el id de la usuario a eliminar
		const { id } = req.params;

		//Se elimina el usuario
		const usuario = await Usuario.destroy({
			where: { id },
		});

		if (!usuario) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}

		res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const getUsuario = async (req, res) => {
	try {
		//Se obtiene el id de la usuario a obtener
		const { id } = req.params;

		//Se obtiene la usuario
		const usuario = await Usuario.findByPk(id);

		if (!usuario) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}

		res.json(usuario);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const getSolicitante = async (req, res) => {
	try {
		const { id } = req.params;
		const solicitante = await Solicitante.findOne({
			where: { idUsuario: id },
			include: [
				{
					model: Genero,
					attributes: ["id", "nombreGenero"],
				},
			],
		});
		if (!solicitante) {
			return res.status(404).json({ message: "Solicitante no encontrado" });
		}
		res.json(solicitante);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};
export const getEmpresa = async (req, res) => {
	try {
		const { id } = req.params;
		const empresa = await Empresa.findOne({
			where: { id: id },
		});
		if (!empresa) {
			return res.status(404).json({ message: "Empresa no encontrada" });
		}
		res.json(empresa);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateSolicitante = async (req, res) => {
	try {
		const { id } = req.params;



		const data = JSON.parse(req.body.data);
		const {
			idGenero,
			idUsuario,
			nombresSolic,
			apellidosSolic,
			fechaNacimiento,
			dui,
			pasaporte,
			nit,
			nup,
			direcSolic,
			telefonoSolic,
			facebook,
			twitter,
			linkedin
		} = data;
		const fotoDePerfil = req.file ? req.file.filename : undefined;
		//Se actualiza la usuario
		const solicitante = await Solicitante.findByPk(id);

		if (!solicitante) {
			return res.status(404).json({ message: "Solicitante no encontrado" });
		}



		solicitante.set({
			idGenero,
			idUsuario,
			nombresSolic,
			apellidosSolic,
			fechaNacimiento,
			dui,
			pasaporte,
			nit,
			nup,
			direcSolic,
			telefonoSolic,
			facebook,
			twitter,
			linkedin,
			...(fotoDePerfil && { fotoDePerfil })
		});
		await solicitante.save();

		const solicitanteCambiado = await Solicitante.findOne({
			where: { id: solicitante.id },
			include: [
				{
					model: Genero,
					attributes: ["id", "nombreGenero"],
				},
			],
		});

		// Check if dui field is not empty
		if (solicitanteCambiado && solicitanteCambiado.dui) {
			req.session.datosLlenos = true;

		} else {
			req.session.datosLlenos = false;

		}
		solicitanteCambiado.setDataValue('datosLlenos', req.session.datosLlenos);

		res.json(solicitanteCambiado);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};
export const updateEmpresa = async (req, res) => {
	try {
		const { id } = req.params;
		const data = JSON.parse(req.body.data);
		
		const {
			nombreEmpresa,
			telefonoEmpresa,
			direcEmpresa
		} = data;
		//console.log(data);
		const fotoDePerfil = req.file ? req.file.filename : undefined;
		//Se actualiza la usuario
		const empresa = await Empresa.findByPk(id);

		if (!empresa) {
			return res.status(404).json({ message: "Empresa no encontrado" });
		}
		empresa.set({
			nombreEmpresa,
			telefonoEmpresa,
			direcEmpresa,
			...(fotoDePerfil && { fotoDePerfil })
		});
		await empresa.save();

		const EmpresaCambiado = await Empresa.findOne({
			where: { id: empresa.id }
		});

		EmpresaCambiado.setDataValue('datosLlenos', req.session.datosLlenos);

		res.json(EmpresaCambiado);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};


export const verificarUsuario = async (req, res) => {
	try {
		// Obtener email y contraseña de los parametros
		const { email, password } = req.body;

		// Obtener usuario
		let usuario = null;
		let coinciden = null;

		// Buscar usuario por medio del correo
		if (email) {
			usuario = await Usuario.findOne({
				where: { correoUsuario: email },
				include: Rol,
			});
		}

		// Si no se encuentra el usuario
		if (!usuario) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}

		if (!password) {
			return res.status(404).json({ message: "Constraseña no valida" });
		}

		//Comparar contraseña proporcionada con contraseña encriptada
		bcrypt.compare(password, usuario.contrasena, async (err, result) => {
			if (result) {
				let datosLlenos = false;
				req.session.isAuthenticated = true;

				// Check if user has role "solicitante"
				if (usuario.Rol.nombreRol === "solicitante") {
					// Query Solicitantes table using usuario_id
					req.session.rol = usuario.Rol.nombreRol;
					const soli = await Solicitante.findOne({
						where : {idUsuario : usuario.id}
					});

					soli.nombresSolic && soli.apellidosSolic ? req.session.nombreUsuario = soli.nombresSolic +' '+ soli.apellidosSolic : req.session.nombreUsuario = ' ';

					const solicitante = await Solicitante.findOne({
						where: { idUsuario: usuario.id },
					});

					// Check if dui field is not empty
					if (solicitante && solicitante.dui) {
						datosLlenos = true;
						req.session.datosLlenos = true;
					} else {
						datosLlenos = false;
						req.session.datosLlenos = false;
					}
				}

				// Check if user has role "empresa"
				if (usuario.Rol.nombreRol === "empresa") {
					req.session.rol = usuario.Rol.nombreRol;

					const emp = await Empresa.findOne({
						where : {idUsuario : usuario.id}
					});

					emp.nombreEmpresa ? req.session.nombreUsuario = emp.nombreEmpresa : req.session.nombreUsuario = ' ';

					// Query Empresas table using usuario_id
					const empresa = await Empresa.findOne({
						where: { idUsuario: usuario.id },
					});

					// Check if nombreEmpresa field is not empty
					if (empresa && empresa.nombreEmpresa) {
						datosLlenos = true;
						req.session.datosLlenos = true;

					} else {
						datosLlenos = false;
						req.session.datosLlenos = false;

					}
				}

				if (usuario.Rol.nombreRol === "administrador") {
					req.session.rol = usuario.Rol.nombreRol;
					req.session.nombreUsuario = email;
						req.session.datosLlenos = true;
				}

				

				res.json({
					valido: true,
					id_usuario: usuario.id,
					rol: usuario.Rol.nombreRol,
					email: email,
					nombreUsuario: req.session.nombreUsuario,
					token: req.session.isAuthenticated,
					datosLlenos: req.session.datosLlenos,
				});

			} else {
				res.json({ valido: false });
			}

			if (err) {
				return res.status(404).json({ message: err });
			}
		});
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};


export const logout = async (req, res) => {
	try {
		req.session.isAuthenticated = false;
		req.session.datosLlenos = false;
		req.session.rol = "empty";

		res.json({
			token: req.session.isAuthenticated,
			dataLleno: req.session.datosLlenos,
			rol: req.session.rol,
		});
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const autenticacion = async (req, res) => {
	try {
		res.json({
			token: req.session.isAuthenticated,
			datosLlenos: req.session.datosLlenos,
			rol : req.session.rol,
		});
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};


