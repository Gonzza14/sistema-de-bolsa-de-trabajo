import { Postula, OfertaEmpleo, Solicitante, sequelize } from "../models";

// Obtener postulaciones del usuario
export const getPostulaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const postulaciones = await sequelize.query("SELECT * FROM public.\"Postulas\" as \"P\" JOIN public.\"OfertaEmpleos\" as \"O\" ON \"O\".\"id\"=\"P\".\"idOferta\" WHERE \"P\".\"idSolic\"="+id+";", 
                               { type: sequelize.QueryTypes.SELECT})
        res.json(postulaciones);
    }catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
