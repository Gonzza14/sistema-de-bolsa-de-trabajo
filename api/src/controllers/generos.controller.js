import { Genero } from '../models';

export const getGeneros = async (req, res) => {
    try {
        const generos = await Genero.findAll();
        res.json(generos);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
