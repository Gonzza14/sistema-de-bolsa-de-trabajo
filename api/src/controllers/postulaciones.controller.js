import { Postula, OfertaEmpleo, sequelize } from "../models";

// Obtener postulaciones del usuario
export const getPostulaciones = async (req, res) => {
    try {
        //const { QueryTypes } = require('sequelize')
        const { id } = req.params;
        const postulaciones = await Postula.findAll({
            where: {
                idSolic:id
            },
            attributes: [
                'idOferta', 'idSolic'
            ],
            include: OfertaEmpleo
        });
        //const postulaciones = await sequelize.query("SELECT * FROM public.\"Postulas\" as \"P\" JOIN public.\"OfertaEmpleos\" as \"O\" ON \"O\".\"id\"=\"P\".\"idOferta\" WHERE \"P\".\"idSolic\"="+id+";", 
                               // { type: sequelize.QueryTypes.SELECT})
        // Necesito saber la empresa, categoria oferta, titulo oferta
        res.json(postulaciones);
    }catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
