//para agregar otro modelo se agrega con coma al lado de User
const models = require ('../models');

exports.list = async(req, res, next) =>{ 
    try { 
        //pide traer todos los campos del modelo User
        const register = await models.Servicios.findAll();
        if(register){
            res.status(200).json(register);
        }else{
            res.status(404).send({
                message: 'No hay servicios registrados'
            })
        }
    } catch(error) { 
        res.status(500).send({
            message: 'Error||'
        })
        next(error);
    }
};

exports.add = async(req, res, next) =>{ 
    try { 
        const register = await models.Servicio.create(req.body);
        res.status(200).json(register);
    } catch(error) { 
        res.status(500).send({
            message: 'Error->'
        })
        next(error);
    }
};

exports.update = async(req, res, next) =>{
    try{
        const register = await models.Servicio.update({titulo: req.body.titulo, descripcion: req.body.descripcion, imagen: req.body.imagen, id:req.body.id},
            {
                where: {
                    id: req.body.id
                },
            });
            res.status(200).json(register);
        }catch (error){
        res.status(500).send({
            message: 'Error.'
        });
        next(error);
    }
};

// exports.activate = async(req, res, next) =>{
//     try{
//         const register = await models.Articulo.update({estado: 1},
//             {
//                 where: {
//                     id: req.body.id
//                 },
//             });
//             res.status(200).json(register);
//         }catch (error){
//         res.status(500).send({
//             message: 'Error.'
//         });
//         next(error);
//     }
// };

// exports.deactivate = async(req, res, next) =>{
//     try{
//         const register = await models.Articulo.update({estado: 0},
//             {
//                 where: {
//                     id: req.body.id
//                 },
//             });
//             res.status(200).json(register);
//         }catch (error){
//         res.status(500).send({
//             message: 'Error.'
//         });
//         next(error);
//     }
// };