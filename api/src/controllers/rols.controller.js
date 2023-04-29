import { Rol } from "../models";
const bcrypt = require('bcrypt');

export const getRols = async (req, res) => {
    try {
        const rols = await Rol.findAll();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

