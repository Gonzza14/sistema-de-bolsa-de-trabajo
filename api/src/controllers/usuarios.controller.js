import { Usuario } from "../models";
const bcrypt = require("bcryptjs")

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
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

    res.json(newUsuario);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

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

        if(req.body.contrasena){
          passEncriptada = await bcrypt.hash(req.body.contrasena, rondas);
        }

        const putUsuario = await usuario.set({
            idRol: req.body.idRol,
            correoUsuario: req.body.correoUsuario,
            contrasena: passEncriptada || usuario.contrasena,
        })
        await putUsuario.save();
        res.json(putUsuario);
    
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

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
}

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

export const verificarUsuario = async (req, res) => {
    try {
        // Obtener email y contraseña de los parametros
        const { email, password } = req.body;
        // Obtener usuario
        let usuario = null
        const coinciden = true
        // Buscar usuario por medio del correo
        if(email){
            usuario = await Usuario.findOne({
            where: { correoUsuario: email }
          });
        }
        // Si no se encuentra el usuario
        // if (!usuario) {
        //   return res.status(404).json({ message: "Usuario no encontrado" });
        // }
        // Comparar contraseña proporcionada con contraseña encriptada
        // if(password){
        //   coinciden = await bcrypt.compare(password, usuario.contrasena)
        // }        
        res.json({"valido": coinciden, "rol": usuario.rol, "email":email});
        
        //res.json({ "email": email, "password": "todavia esta encriptada" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}