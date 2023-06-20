import { Postula, OfertaEmpleo, Solicitante, sequelize } from "../models";

// Obtener postulaciones del usuario
export const getPostulaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const idUsuario = await sequelize.query(`SELECT "S".id FROM public."Solicitantes" as "S" WHERE "S"."idUsuario"=${id};`, 
                                    { type: sequelize.QueryTypes.SELECT})
        
                                    
        const postulaciones = await sequelize.query(`SELECT * FROM public."Postulas" as "P" 
                                                    JOIN public."OfertaEmpleos" as "O" ON "O"."id"="P"."idOferta" 
                                                    JOIN public."Empresas" as "E" ON "E"."id"="O"."idEmpresa"
                                                    WHERE "P"."idSolic"=${idUsuario[0].id};`, 
                                                    { type: sequelize.QueryTypes.SELECT})
        res.json(postulaciones);
    }catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
