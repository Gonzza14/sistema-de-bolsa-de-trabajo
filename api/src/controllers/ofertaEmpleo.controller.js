//Importamos el modelo de datos
import { OfertaEmpleo } from "../models";

//Definimos los metodos del controlador
export const getOfertas = async (req, res) => {
    try {
        //Se obtienen todas las Ofertas
        const Ofertas = await OfertaEmpleo.findAll();

        res.json(Ofertas);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const createOferta = async (req, res) => {
    //Se obtienen los datos del cuerpo de la peticion
    try {
        const { idEmpresa, idCategoriaOfer, tituloOferta, fechaExpiracion, descOferta, perfilAcademico, habilidades, expLaboral, rangoSalar, ubicacion, modalidad } = req.body;

        //Se crea una nueva instancia del modelo de datos
        const newOferta = await OfertaEmpleo.create({
            idEmpresa,
            idCategoriaOfer,
            tituloOferta,
            fechaExpiracion,
            descOferta,
            perfilAcademico,
            habilidades,
            expLaboral,
            rangoSalar,
            ubicacion,
            modalidad
        });

        res.json(newOferta);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const updateOferta = async (req, res) => {
    try {
        //Se obtiene el id de la Oferta a actualizar
        const { id } = req.params;

        //Se actualiza la Oferta
        const Oferta = await OfertaEmpleo.findByPk(id);

        if (!Oferta) {
            return res.status(404).json({ message: "Oferta no encontrada" });
        }

        Oferta.set(req.body);
        await Oferta.save();
        res.json(Oferta);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const deleteOferta = async (req, res) => {
    try {
        //Se obtiene el id de la Oferta a eliminar
        const { id } = req.params;

        //Se elimina la Oferta
        const Oferta = await OfertaEmpleo.destroy({
            where: { id },
        });

        if (!Oferta) {
            return res.status(404).json({ message: "Oferta no encontrada" });
        }

        res.sendStatus(204);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const getOferta = async (req, res) => {
    try {
        //Se obtiene el id de la Oferta a obtener
        const { id } = req.params;

        //Se obtiene la Oferta
        const Oferta = await OfertaEmpleo.findByPk(id);

        if (!Oferta) {
            return res.status(404).json({ message: "Oferta no encontrada" });
        }

        res.json(Oferta);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};